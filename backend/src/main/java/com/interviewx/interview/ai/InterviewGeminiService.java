package com.interviewx.interview.ai;

import com.interviewx.interview.entity.InterviewConversation;
import com.interviewx.interview.entity.InterviewSession;
import com.interviewx.interview.gemini.GeminiContent;
import com.interviewx.interview.gemini.GeminiPart;
import com.interviewx.interview.gemini.GeminiRequest;
import com.interviewx.interview.gemini.GeminiResponse;
import com.interviewx.interview.util.PromptBuilder;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientException;


import java.util.List;

@Service
@RequiredArgsConstructor
public class InterviewGeminiService implements GeminiService {

    private final RestClient geminiRestClient;

    @Qualifier("geminiApiKey")
    private final String apiKey;

    private String askGemini(String prompt) {

    try {

        GeminiPart part = GeminiPart.builder()
                .text(prompt)
                .build();

        GeminiContent content = GeminiContent.builder()
                .parts(List.of(part))
                .build();

        GeminiRequest request = GeminiRequest.builder()
                .contents(List.of(content))
                .build();

        GeminiResponse response = geminiRestClient
                .post()
                .uri(uriBuilder ->
                        uriBuilder
                                .queryParam("key", apiKey)
                                .build())
                .body(request)
                .retrieve()
                .body(GeminiResponse.class);

        if (response == null
                || response.getCandidates() == null
                || response.getCandidates().isEmpty()) {

            throw new RuntimeException("No response from Gemini.");
        }

        return response.getCandidates()
                .get(0)
                .getContent()
                .getParts()
                .get(0)
                .getText();

    } catch (HttpServerErrorException.ServiceUnavailable e) {

        throw new RuntimeException(
                "AI service is temporarily unavailable due to high demand. Please try again in a few minutes."
        );

    } catch (RestClientException e) {

        throw new RuntimeException(
                "Unable to connect to the AI service. Please try again later."
        );

    } catch (Exception e) {

        throw new RuntimeException(
                "Something went wrong while generating the interview question."
        );
    }
}
    @Override
    public String generateFirstQuestion(
            InterviewSession session
    ) {

        return askGemini(

                PromptBuilder.buildFirstQuestionPrompt(
                        session
                )

        );

    }

    @Override
    public String generateNextQuestion(
            InterviewSession session,
            List<InterviewConversation> conversations
    ) {

        return askGemini(

                PromptBuilder.buildNextQuestionPrompt(

                        session,

                        conversations

                )

        );

    }

    @Override
    public String generateFinalReport(
            InterviewSession session,
    

        List<InterviewConversation> conversations ){

        return askGemini(

                PromptBuilder.buildFinalReportPrompt(

                        session,

                        conversations

                )

        );

    }

}