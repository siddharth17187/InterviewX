package com.interviewx.interview.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.interviewx.auth.entity.User;
import com.interviewx.auth.repository.UserRepository;
import com.interviewx.interview.ai.GeminiService;
import com.interviewx.interview.dto.InterviewAnswerRequest;
import com.interviewx.interview.dto.InterviewQuestionResponse;
import com.interviewx.interview.dto.InterviewResultResponse;
import com.interviewx.interview.dto.InterviewSetupRequest;
import com.interviewx.interview.entity.InterviewConversation;
import com.interviewx.interview.entity.InterviewSession;
import com.interviewx.interview.enums.InterviewState;
import com.interviewx.interview.repository.InterviewConversationRepository;
import com.interviewx.interview.repository.InterviewSessionRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class InterviewServiceImpl implements InterviewService {

    private final InterviewSessionRepository sessionRepository;

    private final InterviewConversationRepository conversationRepository;

    private final UserRepository userRepository;

    private final GeminiService geminiService;

    private User getCurrentUser() {

        Authentication authentication =
                SecurityContextHolder
                        .getContext()
                        .getAuthentication();

        return userRepository

                .findByEmail(authentication.getName())

                .orElseThrow(() ->

                        new RuntimeException("User not found"));

    }@Override
    public InterviewQuestionResponse startInterview(
            InterviewSetupRequest request
    ) {

        User user = getCurrentUser();

        InterviewSession session =
                InterviewSession.builder()

                        .user(user)

                        .topic(request.getTopic())

                        .difficulty(request.getDifficulty())

                        .totalQuestions(request.getTotalQuestions())

                        .currentQuestion(1)

                        .completed(false)

                        .overallScore(0.0)

                        .startedAt(LocalDateTime.now())
                        .state(InterviewState.STARTING)

                        .build();

        session = sessionRepository.save(session);

        String firstQuestion =
                geminiService.generateFirstQuestion(session);

        InterviewConversation conversation =
                InterviewConversation.builder()

                        .session(session)

                        .question(firstQuestion)

                        .questionNumber(1)

                        .createdAt(LocalDateTime.now())

                        .build();

        conversationRepository.save(conversation);

        return InterviewQuestionResponse.builder()

                .sessionId(session.getId())

                .questionNumber(1)

                .question(firstQuestion)

                .interviewCompleted(false)

                .build();

    }@Override
public InterviewQuestionResponse submitAnswer(
        InterviewAnswerRequest request
) {

    User user = getCurrentUser();

    InterviewSession session =
            sessionRepository
                    .findByIdAndUser(
                            request.getSessionId(),
                            user
                    )
                    .orElseThrow(() ->
                            new RuntimeException("Interview not found"));

    List<InterviewConversation> conversations =
            conversationRepository
                    .findBySessionOrderByQuestionNumberAsc(session);

    InterviewConversation current =
            conversations.get(session.getCurrentQuestion() - 1);

    // Save candidate answer
    current.setAnswer(request.getAnswer());

    conversationRepository.save(current);

    // Reload conversation including latest answer
    conversations =
            conversationRepository
                    .findBySessionOrderByQuestionNumberAsc(session);

    // Last question?
   
           if (session.getCurrentQuestion()
        >= session.getTotalQuestions()) {

    session.setCompleted(true);

    session.setState(InterviewState.COMPLETED);

    session.setCompletedAt(LocalDateTime.now());

    sessionRepository.save(session);

    // Generate final report once to verify Gemini can process it
    geminiService.generateFinalReport(
            session,
            conversations
    );

    return InterviewQuestionResponse.builder()

            .sessionId(session.getId())

            .questionNumber(session.getCurrentQuestion())

            .question("Interview Completed")

            .interviewCompleted(true)

            .build();
}

    // Generate next question
    String nextQuestion =
            geminiService.generateNextQuestion(
                    session,
                    conversations
            );

    // Move to next question
    session.setCurrentQuestion(
            session.getCurrentQuestion() + 1
    );

    session.setState(InterviewState.ASKING);

    sessionRepository.save(session);

    InterviewConversation nextConversation =
            InterviewConversation.builder()

                    .session(session)

                    .question(nextQuestion)

                    .questionNumber(
                            session.getCurrentQuestion()
                    )

                    .createdAt(LocalDateTime.now())

                    .build();

    conversationRepository.save(nextConversation);

    return InterviewQuestionResponse.builder()

            .sessionId(session.getId())

            .questionNumber(
                    session.getCurrentQuestion()
            )

            .question(nextQuestion)

            .interviewCompleted(false)

            .build();

}
    
    @Override
public InterviewResultResponse getResult(
        Long sessionId
) {

    User user = getCurrentUser();

    InterviewSession session =
            sessionRepository
                    .findByIdAndUser(
                            sessionId,
                            user
                    )
                    .orElseThrow(() ->
                            new RuntimeException(
                                    "Interview not found"
                            ));

    List<InterviewConversation> conversations =
        conversationRepository
                .findBySessionOrderByQuestionNumberAsc(session);

String json =
        geminiService.generateFinalReport(
                session,
                conversations
        );

    // Remove markdown if Gemini returns it
    json = json
            .replace("```json", "")
            .replace("```", "")
            .trim();

    try {

        ObjectMapper mapper =
                new ObjectMapper();

        return mapper.readValue(
                json,
                InterviewResultResponse.class
        );

    } catch (JsonProcessingException e) {

        throw new RuntimeException(
                "Unable to parse interview report",
                e
        );

    }

}
}