package com.interviewx.interview.ai;

import com.interviewx.interview.entity.InterviewConversation;
import com.interviewx.interview.entity.InterviewSession;

import java.util.List;

public interface GeminiService {

    String generateFirstQuestion(
            InterviewSession session
    );

    String generateNextQuestion(
            InterviewSession session,
            List<InterviewConversation> conversations
    );

    String generateFinalReport(
            InterviewSession session,
            List<InterviewConversation> conversations
    );

}