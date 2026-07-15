package com.interviewx.coding.mapper;

import com.interviewx.coding.dto.CodingQuestionResponse;
import com.interviewx.coding.entity.CodingQuestion;
import com.interviewx.coding.entity.StudentCodingProgress;
import org.springframework.stereotype.Component;

@Component
public class CodingMapper {

    public CodingQuestionResponse toResponse(
            CodingQuestion question,
            StudentCodingProgress progress
    ) {

        return CodingQuestionResponse.builder()
                .id(question.getId())
                .title(question.getTitle())
                .topic(question.getTopic())
                .difficulty(question.getDifficulty())
                .companies(question.getCompanies())
                .leetcodeUrl(question.getLeetcodeUrl())
                .hackerRankUrl(question.getHackerRankUrl())
                .youtubeUrl(question.getYoutubeUrl())
                .solved(progress != null && Boolean.TRUE.equals(progress.getSolved()))
                .bookmarked(progress != null && Boolean.TRUE.equals(progress.getBookmarked()))
                .build();

    }

}