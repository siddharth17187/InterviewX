package com.interviewx.interview.util;

import com.interviewx.interview.entity.InterviewConversation;

import java.util.List;

public class ConversationManager {

    private ConversationManager() {
    }

    public static String buildConversation(

            List<InterviewConversation> conversations

    ) {

        StringBuilder builder = new StringBuilder();

        for (InterviewConversation conversation : conversations) {

            builder.append("Interviewer: ")
                    .append(conversation.getQuestion())
                    .append("\n");

            if (conversation.getAnswer() != null) {

                builder.append("Candidate: ")
                        .append(conversation.getAnswer())
                        .append("\n");

            }

            builder.append("\n");

        }

        return builder.toString();

    }

}