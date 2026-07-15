package com.interviewx.resume.service;

import com.interviewx.resume.dto.ResumeAnalysisResponse;
import org.springframework.web.multipart.MultipartFile;

public interface ResumeService {

    ResumeAnalysisResponse analyzeResume(
            MultipartFile resume,
            String jobDescription
    );
}