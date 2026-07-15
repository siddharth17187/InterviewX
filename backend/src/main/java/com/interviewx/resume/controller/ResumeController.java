package com.interviewx.resume.controller;

import com.interviewx.common.ApiResponse;
import com.interviewx.resume.dto.ResumeAnalysisResponse;
import com.interviewx.resume.service.ResumeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/resume")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ResumeController {

    private final ResumeService resumeService;

    @PostMapping(
            value = "/analyze",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ApiResponse<ResumeAnalysisResponse> analyzeResume(
            @RequestParam("resume") MultipartFile resume,
            @RequestParam("jobDescription") String jobDescription) {

        System.out.println("===== CONTROLLER HIT =====");

        ResumeAnalysisResponse response =
                resumeService.analyzeResume(
                        resume,
                        jobDescription);

        return ApiResponse.<ResumeAnalysisResponse>builder()
                .success(true)
                .message("Resume analyzed successfully")
                .data(response)
                .build();
    }
}