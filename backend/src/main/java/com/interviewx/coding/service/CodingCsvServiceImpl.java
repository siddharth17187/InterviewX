package com.interviewx.coding.service;

import com.interviewx.coding.entity.CodingQuestion;
import com.interviewx.coding.enums.Difficulty;
import com.interviewx.coding.repository.CodingQuestionRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVRecord;
import org.springframework.stereotype.Service;

import java.io.Reader;

@Service
@RequiredArgsConstructor
public class CodingCsvServiceImpl implements CodingCsvService {

    private final CodingQuestionRepository codingQuestionRepository;

    @Override
    public int importQuestions(Reader reader) {

        int count = 0;

        try {

            Iterable<CSVRecord> records =
                    CSVFormat.DEFAULT
                            .builder()
                            .setHeader()
                            .setSkipHeaderRecord(true)
                            .build()
                            .parse(reader);

            for (CSVRecord record : records) {

                CodingQuestion question = CodingQuestion.builder()
                        .title(record.get("title"))
                        .topic(record.get("topic"))
                        .difficulty(
                                Difficulty.valueOf(
                                        record.get("difficulty")
                                                .trim()
                                                .toUpperCase()
                                )
                        )
                        .companies(record.get("companies"))
                        
                        .leetcodeUrl(record.get("leetcode_url"))
                        .hackerRankUrl(record.get("hackerrank_url"))
                        .build();

                codingQuestionRepository.save(question);

                count++;
            }

        } catch (Exception e) {
            throw new RuntimeException("CSV import failed", e);
        }

        return count;
    }
}