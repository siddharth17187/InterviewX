package com.interviewx.interview.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InterviewFeedbackResponse {

    private Double technicalScore;

    private Double communicationScore;

    private Double confidenceScore;

    private String feedback;

}