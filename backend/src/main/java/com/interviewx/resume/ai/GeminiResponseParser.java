package com.interviewx.resume.ai;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.interviewx.resume.dto.ResumeAnalysisResponse;
import org.springframework.stereotype.Component;

@Component
public class GeminiResponseParser {

    private final ObjectMapper objectMapper = new ObjectMapper();

    public ResumeAnalysisResponse parse(String geminiResponse) {

        try {

            JsonNode root = objectMapper.readTree(geminiResponse);

            String aiJson = root.path("candidates")
                    .get(0)
                    .path("content")
                    .path("parts")
                    .get(0)
                    .path("text")
                    .asText();

            aiJson = aiJson
                    .replace("```json", "")
                    .replace("```", "")
                    .trim();

            return objectMapper.readValue(
                    aiJson,
                    ResumeAnalysisResponse.class);

        } catch (Exception e) {

            throw new RuntimeException(
                    "Failed to parse Gemini response",
                    e);

        }
    }
}