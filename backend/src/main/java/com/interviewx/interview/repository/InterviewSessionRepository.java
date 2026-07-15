package com.interviewx.interview.repository;

import com.interviewx.auth.entity.User;
import com.interviewx.interview.entity.InterviewSession;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface InterviewSessionRepository
        extends JpaRepository<InterviewSession, Long> {

    List<InterviewSession> findByUser(User user);

    Optional<InterviewSession> findByIdAndUser(
            Long id,
            User user
    );

}