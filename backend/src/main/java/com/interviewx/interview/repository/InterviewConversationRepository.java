package com.interviewx.interview.repository;

import com.interviewx.interview.entity.InterviewConversation;
import com.interviewx.interview.entity.InterviewSession;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InterviewConversationRepository
        extends JpaRepository<InterviewConversation, Long> {

    List<InterviewConversation> findBySessionOrderByQuestionNumberAsc(
            InterviewSession session
    );

}