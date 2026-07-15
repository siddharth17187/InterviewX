package com.interviewx.interview.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InterviewQuestionResponse {

    private Long sessionId;

    private Integer questionNumber;

    private String question;

    private Boolean interviewCompleted;

}