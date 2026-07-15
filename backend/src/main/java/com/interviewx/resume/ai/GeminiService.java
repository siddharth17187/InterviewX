package com.interviewx.resume.ai;

public interface GeminiService {

    String analyzeResume(
            String resumeText,
            String jobDescription);

}