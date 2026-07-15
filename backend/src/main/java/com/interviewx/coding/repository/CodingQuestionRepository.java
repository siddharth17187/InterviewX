package com.interviewx.coding.repository;

import com.interviewx.coding.entity.CodingQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CodingQuestionRepository
        extends JpaRepository<CodingQuestion, Long>,
                JpaSpecificationExecutor<CodingQuestion> {
}