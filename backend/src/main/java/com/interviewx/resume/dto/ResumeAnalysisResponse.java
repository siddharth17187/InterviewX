package com.interviewx.resume.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResumeAnalysisResponse {

    private int atsScore;

    private int jobMatchScore;

    private int resumeScore;

    private int keywordScore;

    private List<String> matchingSkills;

    private List<String> missingSkills;

    private List<String> missingKeywords;

    private List<String> strengths;

    private List<String> weaknesses;

    private List<String> suggestions;

}