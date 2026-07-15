package com.interviewx.resume.ai;

import org.springframework.web.client.HttpClientErrorException;

import com.interviewx.resume.util.PromptBuilder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class GeminiServiceImpl implements GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    private final PromptBuilder promptBuilder;

    private final RestTemplate restTemplate = new RestTemplate();

    @Override
    public String analyzeResume(
            String resumeText,
            String jobDescription) {

        String prompt =
                promptBuilder.buildPrompt(
                        resumeText,
                        jobDescription);

        String url =
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key="
                        + apiKey;

        Map<String, Object> body =
                Map.of(
                        "contents",
                        List.of(
                                Map.of(
                                        "parts",
                                        List.of(
                                                Map.of(
                                                        "text",
                                                        prompt
                                                )
                                        )
                                )
                        )
                );

        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> entity =
                new HttpEntity<>(body, headers);

       try {

    ResponseEntity<String> response =
            restTemplate.exchange(
                    url,
                    HttpMethod.POST,
                    entity,
                    String.class);

    return response.getBody();

} catch (HttpClientErrorException.TooManyRequests e) {

    throw new RuntimeException(
            "Gemini API quota exceeded. Please try again later."
    );

}

    }

}