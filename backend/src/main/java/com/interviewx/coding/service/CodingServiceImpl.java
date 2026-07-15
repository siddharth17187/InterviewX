package com.interviewx.coding.service;

import com.interviewx.auth.entity.User;
import com.interviewx.auth.repository.UserRepository;
import com.interviewx.coding.dto.CodingProgressResponse;
import com.interviewx.coding.dto.CodingQuestionResponse;
import com.interviewx.coding.dto.DailyChallengeResponse;
import com.interviewx.coding.entity.CodingQuestion;
import com.interviewx.coding.entity.StudentCodingProgress;
import com.interviewx.coding.mapper.CodingMapper;
import com.interviewx.coding.repository.CodingQuestionRepository;
import com.interviewx.coding.repository.StudentCodingProgressRepository;
import com.interviewx.coding.specification.CodingSpecification;

import lombok.RequiredArgsConstructor;
import com.interviewx.coding.dto.ContinueLearningResponse;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CodingServiceImpl implements CodingService {

    private final CodingQuestionRepository codingQuestionRepository;

    private final StudentCodingProgressRepository progressRepository;

    private final CodingMapper codingMapper;

    private final UserRepository userRepository;

    private User getCurrentUser() {

        Authentication authentication =
                SecurityContextHolder
                        .getContext()
                        .getAuthentication();

        return userRepository
                .findByEmail(authentication.getName())
                .orElseThrow(() ->
                        new RuntimeException("User not found"));
    }

    @Override
    public List<CodingQuestionResponse> getQuestions(
            String keyword,
            String topic,
            String difficulty,
            String company
    ) {

        User user = getCurrentUser();

        Specification<CodingQuestion> specification =
                CodingSpecification.filterQuestions(
                        keyword,
                        topic,
                        difficulty,
                        company
                );

        List<CodingQuestion> questions =
                codingQuestionRepository.findAll(specification);

        return questions.stream()
                .map(question -> {

                    StudentCodingProgress progress =
                            progressRepository
                                    .findByUserAndQuestion(user, question)
                                    .orElse(null);

                    return codingMapper.toResponse(
                            question,
                            progress
                    );

                })
                .toList();

    }

    @Override
    public CodingProgressResponse getProgress() {

        User user = getCurrentUser();

        long total = codingQuestionRepository.count();

        long solved =
                progressRepository.countByUserAndSolvedTrue(user);

        long bookmarked =
                progressRepository.countByUserAndBookmarkedTrue(user);

        double percentage =
                total == 0 ? 0 : (double) solved * 100 / total;

        return CodingProgressResponse.builder()
                .totalQuestions(total)
                .solvedQuestions(solved)
                .bookmarkedQuestions(bookmarked)
                .xp((int) solved * 10)
                .streak(0)
                .completionPercentage(percentage)
                .build();

    }

    @Override
    public void markSolved(Long questionId) {

        User user = getCurrentUser();

        CodingQuestion question =
                codingQuestionRepository.findById(questionId)
                        .orElseThrow(() ->
                                new RuntimeException("Question not found"));

        StudentCodingProgress progress =
                progressRepository
                        .findByUserAndQuestion(user, question)
                        .orElse(
                                StudentCodingProgress.builder()
                                        .user(user)
                                        .question(question)
                                        .build()
                        );

        progress.setSolved(true);
        progress.setCompletedAt(LocalDateTime.now());
        progress.setXp(10);

        progressRepository.save(progress);

    }

    @Override
    public void bookmarkQuestion(Long questionId) {

        User user = getCurrentUser();

        CodingQuestion question =
                codingQuestionRepository.findById(questionId)
                        .orElseThrow(() ->
                                new RuntimeException("Question not found"));

        StudentCodingProgress progress =
                progressRepository
                        .findByUserAndQuestion(user, question)
                        .orElse(
                                StudentCodingProgress.builder()
                                        .user(user)
                                        .question(question)
                                        .build()
                        );

        progress.setBookmarked(true);

        progressRepository.save(progress);

    }

    @Override
    public DailyChallengeResponse getDailyChallenge() {

        List<CodingQuestion> questions =
                codingQuestionRepository.findAll();

        if (questions.isEmpty()) {
            throw new RuntimeException("No Questions Found");
        }

        int index =
                LocalDate.now().getDayOfYear() % questions.size();

        CodingQuestion question = questions.get(index);

        return DailyChallengeResponse.builder()
                .id(question.getId())
                .title(question.getTitle())
                .topic(question.getTopic())
                .difficulty(question.getDifficulty().name())
                .leetcodeUrl(question.getLeetcodeUrl())
                .build();

    }


    @Override
public ContinueLearningResponse getContinueLearning() {

    User user = getCurrentUser();

    List<CodingQuestion> questions =
            codingQuestionRepository.findAll();

    for (CodingQuestion question : questions) {

        StudentCodingProgress progress =
                progressRepository
                        .findByUserAndQuestion(user, question)
                        .orElse(null);

        if (progress == null || !Boolean.TRUE.equals(progress.getSolved())) {

            return ContinueLearningResponse.builder()
                    .id(question.getId())
                    .title(question.getTitle())
                    .topic(question.getTopic())
                    .difficulty(question.getDifficulty().name())
                    .leetcodeUrl(question.getLeetcodeUrl())
                    .build();

        }

    }

    return ContinueLearningResponse.builder()
            .title("🎉 All Questions Solved")
            .topic("Congratulations")
            .difficulty("")
            .leetcodeUrl("")
            .build();

}

}