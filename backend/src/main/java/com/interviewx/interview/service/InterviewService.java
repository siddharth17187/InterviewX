package com.interviewx.interview.service;

import com.interviewx.interview.dto.*;

public interface InterviewService {

    InterviewQuestionResponse startInterview(
            InterviewSetupRequest request
    );

    InterviewQuestionResponse submitAnswer(
            InterviewAnswerRequest request
    );

    InterviewResultResponse getResult(
            Long sessionId
    );

}