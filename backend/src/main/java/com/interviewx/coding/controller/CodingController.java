package com.interviewx.coding.controller;

import com.interviewx.common.ApiResponse;
import com.interviewx.coding.dto.CodingProgressResponse;
import com.interviewx.coding.dto.CodingQuestionResponse;
import com.interviewx.coding.dto.ContinueLearningResponse;
import com.interviewx.coding.dto.DailyChallengeResponse;
import com.interviewx.coding.service.CodingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/coding")
@RequiredArgsConstructor
@CrossOrigin(origins = {
    "http://localhost:5173", 
    "https://interview-x-unl2-qyb122ut6-siddharth1718.vercel.app"
})
public class CodingController {

    private final CodingService codingService;

    @GetMapping("/questions")
    public ApiResponse<List<CodingQuestionResponse>> getQuestions(

            @RequestParam(required = false) String keyword,

            @RequestParam(required = false) String topic,

            @RequestParam(required = false) String difficulty,

            @RequestParam(required = false) String company

    ) {

        return ApiResponse.<List<CodingQuestionResponse>>builder()
                .success(true)
                .message("Questions fetched successfully")
                .data(codingService.getQuestions(
                        keyword,
                        topic,
                        difficulty,
                        company
                ))
                .build();

    }

    @GetMapping("/progress")
    public ApiResponse<CodingProgressResponse> getProgress() {

        return ApiResponse.<CodingProgressResponse>builder()
                .success(true)
                .message("Progress fetched successfully")
                .data(codingService.getProgress())
                .build();

    }

    @PostMapping("/questions/{id}/solve")
    public ApiResponse<String> markSolved(
            @PathVariable Long id
    ) {

        codingService.markSolved(id);

        return ApiResponse.<String>builder()
                .success(true)
                .message("Question marked as solved")
                .data("SUCCESS")
                .build();

    }

    @PostMapping("/questions/{id}/bookmark")
    public ApiResponse<String> bookmarkQuestion(
            @PathVariable Long id
    ) {

        codingService.bookmarkQuestion(id);

        return ApiResponse.<String>builder()
                .success(true)
                .message("Question bookmarked")
                .data("SUCCESS")
                .build();

    }
    @GetMapping("/daily")
public ApiResponse<DailyChallengeResponse> getDailyChallenge() {

    return ApiResponse.<DailyChallengeResponse>builder()

            .success(true)

            .message("Daily Challenge")

            .data(codingService.getDailyChallenge())

            .build();

}

@GetMapping("/continue")
public ApiResponse<ContinueLearningResponse> getContinueLearning() {

    return ApiResponse.<ContinueLearningResponse>builder()
            .success(true)
            .message("Continue Learning")
            .data(codingService.getContinueLearning())
            .build();

}
}