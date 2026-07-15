package com.interviewx.interview.controller;

import com.interviewx.interview.dto.InterviewAnswerRequest;
import com.interviewx.interview.dto.InterviewQuestionResponse;
import com.interviewx.interview.dto.InterviewResultResponse;
import com.interviewx.interview.dto.InterviewSetupRequest;
import com.interviewx.interview.service.InterviewService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/interview")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class InterviewController {

    private final InterviewService interviewService;

    @PostMapping("/start")
    public ResponseEntity<InterviewQuestionResponse> startInterview(
            @RequestBody InterviewSetupRequest request
    ) {

        return ResponseEntity.ok(
                interviewService.startInterview(request)
        );

    }

    @PostMapping("/answer")
    public ResponseEntity<InterviewQuestionResponse> submitAnswer(
            @RequestBody InterviewAnswerRequest request
    ) {

        return ResponseEntity.ok(
                interviewService.submitAnswer(request)
        );

    }

    @GetMapping("/result/{sessionId}")
    public ResponseEntity<InterviewResultResponse> getResult(
            @PathVariable Long sessionId
    ) {

        return ResponseEntity.ok(
                interviewService.getResult(sessionId)
        );

    }

}