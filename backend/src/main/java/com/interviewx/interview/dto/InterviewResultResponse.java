package com.interviewx.interview.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InterviewResultResponse {

    private Double overallScore;

    private Double technicalScore;

    private Double communicationScore;

    private Double confidenceScore;

    private List<String> strengths;

    private List<String> improvements;

    private String overallFeedback;

}