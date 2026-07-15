package com.interviewx.interview.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InterviewAnswerRequest {

    private Long sessionId;

    private String answer;

}