package com.interviewx.coding.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CodingProgressResponse {

    private Long totalQuestions;

    private Long solvedQuestions;

    private Long bookmarkedQuestions;

    private Integer xp;

    private Integer streak;

    private Double completionPercentage;

}