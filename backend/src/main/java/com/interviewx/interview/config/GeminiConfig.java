package com.interviewx.interview.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;

@Configuration
public class GeminiConfig {

    @Value("${gemini.api.key}")
    private String apiKey;

    @Bean
    public RestClient geminiRestClient() {

        return RestClient.builder()
                .baseUrl(
                        "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent"
                )
                .defaultHeader(
                        "Content-Type",
                        "application/json"
                )
                .build();

    }

    @Bean
    public String geminiApiKey() {
        return apiKey;
    }

}