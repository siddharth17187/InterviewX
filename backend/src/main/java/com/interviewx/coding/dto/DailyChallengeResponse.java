
package com.interviewx.coding.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DailyChallengeResponse {

    private Long id;

    private String title;

    private String topic;

    private String difficulty;

    private String leetcodeUrl;

}