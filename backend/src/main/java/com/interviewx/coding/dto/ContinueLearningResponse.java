package com.interviewx.coding.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ContinueLearningResponse {

    private Long id;

    private String title;

    private String topic;

    private String difficulty;

    private String leetcodeUrl;

}