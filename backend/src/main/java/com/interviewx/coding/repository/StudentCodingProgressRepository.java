package com.interviewx.coding.repository;

import com.interviewx.coding.entity.CodingQuestion;
import com.interviewx.coding.entity.StudentCodingProgress;
import com.interviewx.auth.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StudentCodingProgressRepository
        extends JpaRepository<StudentCodingProgress, Long> {

    Optional<StudentCodingProgress> findByUserAndQuestion(
            User user,
            CodingQuestion question
    );

    List<StudentCodingProgress> findByUser(User user);

    long countByUserAndSolvedTrue(User user);

    long countByUserAndBookmarkedTrue(User user);

}