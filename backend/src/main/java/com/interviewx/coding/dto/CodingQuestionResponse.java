package com.interviewx.coding.dto;

import com.interviewx.coding.enums.Difficulty;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CodingQuestionResponse {

    private Long id;

    private String title;

    private String topic;

    private Difficulty difficulty;

    private String companies;

    private String leetcodeUrl;

    private String hackerRankUrl;

    private String youtubeUrl;

    private Boolean solved;

    private Boolean bookmarked;

}