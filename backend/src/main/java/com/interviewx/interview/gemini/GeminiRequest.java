package com.interviewx.interview.gemini;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GeminiRequest {

    private List<GeminiContent> contents;

}