package com.interviewx.resume.service;

import com.interviewx.resume.ai.GeminiResponseParser;
import com.interviewx.resume.ai.GeminiService;
import com.interviewx.resume.dto.ResumeAnalysisResponse;
import com.interviewx.resume.parser.PdfParserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class ResumeServiceImpl implements ResumeService {

    private final PdfParserService pdfParserService;
    private final GeminiService geminiService;
    private final GeminiResponseParser geminiResponseParser;

    @Override
    public ResumeAnalysisResponse analyzeResume(
            MultipartFile resume,
            String jobDescription) {

        try {

            String resumeText =
                    pdfParserService.extractText(resume);

            System.out.println("========== RESUME TEXT ==========");
            System.out.println(resumeText);

            String geminiResponse =
                    geminiService.analyzeResume(
                            resumeText,
                            jobDescription);

            System.out.println("========== GEMINI RESPONSE ==========");
            System.out.println(geminiResponse);

            return geminiResponseParser.parse(geminiResponse);

        } catch (Exception e) {

            e.printStackTrace();

            throw new RuntimeException(
                    "Failed to analyze resume",
                    e);

        }
    }
}