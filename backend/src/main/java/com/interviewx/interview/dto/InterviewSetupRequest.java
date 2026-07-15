package com.interviewx.interview.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InterviewSetupRequest {

    private String topic;

    private String difficulty;

    private Integer totalQuestions;

}