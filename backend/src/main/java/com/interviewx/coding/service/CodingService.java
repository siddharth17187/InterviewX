package com.interviewx.coding.service;

import com.interviewx.coding.dto.CodingProgressResponse;
import com.interviewx.coding.dto.CodingQuestionResponse;
import com.interviewx.coding.dto.ContinueLearningResponse;
import com.interviewx.coding.dto.DailyChallengeResponse;

import java.util.List;

public interface CodingService {

    List<CodingQuestionResponse> getQuestions(
            String keyword,
            String topic,
            String difficulty,
            String company
    );

    CodingProgressResponse getProgress();

    void markSolved(Long questionId);

    void bookmarkQuestion(Long questionId);

    DailyChallengeResponse getDailyChallenge();

    ContinueLearningResponse getContinueLearning();

}