package com.interviewx.interview.util;

import com.interviewx.interview.entity.InterviewConversation;
import com.interviewx.interview.entity.InterviewSession;

import java.util.List;

public class PromptBuilder {

    private PromptBuilder() {
    }

    public static String buildFirstQuestionPrompt(
            InterviewSession session
    ) {

        return """
                You are an experienced Senior Technical Interviewer.

                Conduct a realistic interview.

                Candidate Level:
                Fresher

                Topic:
                %s

                Difficulty:
                %s

                Rules:

                • Ask only ONE question.

                • Do not answer yourself.

                • Do not explain.

                • Wait for the candidate response.

                Start the interview naturally.

                """
                .formatted(
                        session.getTopic(),
                        session.getDifficulty()
                );

    }

    public static String buildNextQuestionPrompt(

            InterviewSession session,

            List<InterviewConversation> conversations

    ) {

        String conversation =
                ConversationManager.buildConversation(
                        conversations
                );

        return """
                You are a Senior Technical Interviewer.

                Continue this interview naturally.

                Topic:

                %s

                Difficulty:

                %s

                Complete Conversation:

                %s

                Instructions

                Analyze all previous answers.

                If the candidate is weak,
                ask an easier follow-up.

                If the candidate performs well,
                gradually increase the difficulty.

                Ask ONLY ONE next question.

                Never answer your own question.

                Return only the next interview question.

                """
                .formatted(

                        session.getTopic(),

                        session.getDifficulty(),

                        conversation

                );

    }

   public static String buildFinalReportPrompt(

        InterviewSession session,

        List<InterviewConversation> conversations

) {

    String conversation =
            ConversationManager.buildConversation(
                    conversations
            );

    return """
            You are a Senior Technical Interviewer.

            Evaluate the COMPLETE interview.

            Topic:
            %s

            Complete Conversation:
            %s

            IMPORTANT RULES

            Return ONLY valid JSON.

            Do NOT write explanations.

            Do NOT use markdown.

            Do NOT wrap JSON inside ```json.

            Return exactly this format:

            {
              "overallScore": 85,
              "technicalScore": 80,
              "communicationScore": 90,
              "confidenceScore": 84,
              "strengths": [
                "Strong Java fundamentals",
                "Good communication"
              ],
              "improvements": [
                "Improve Collections",
                "Explain projects more clearly"
              ],
              "overallFeedback": "Overall good interview performance."
            }

            """
            .formatted(

                    session.getTopic(),

                    conversation

            );

}
}