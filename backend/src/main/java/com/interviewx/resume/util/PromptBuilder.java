package com.interviewx.resume.util;

import org.springframework.stereotype.Component;

@Component
public class PromptBuilder {

    public String buildPrompt(
            String resumeText,
            String jobDescription) {

        return """
You are an ATS Resume Analyzer.

Compare the resume with the Job Description.

Return ONLY valid JSON.

JSON Format:

{
  "atsScore":0,
  "jobMatchScore":0,
  "resumeScore":0,
  "keywordScore":0,

  "matchingSkills":[],
  "missingSkills":[],
  "missingKeywords":[],

  "strengths":[],
  "weaknesses":[],

  "suggestions":[]
}

Resume:

%s

Job Description:

%s

Do not explain anything.

Return only JSON.
""".formatted(resumeText, jobDescription);

    }

}