package com.interviewx.coding.loader;

import com.interviewx.coding.repository.CodingQuestionRepository;
import com.interviewx.coding.service.CodingCsvService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;

@Component
@RequiredArgsConstructor
public class CodingDataLoader implements CommandLineRunner {

    private final CodingQuestionRepository repository;
    private final CodingCsvService csvService;

    @Override
    public void run(String... args) throws Exception {

        if (repository.count() > 0) {

            System.out.println("Coding questions already exist.");

            return;

        }

        ClassPathResource resource =
                new ClassPathResource(
                        "data/coding_questions.csv"
                );

        csvService.importQuestions(

                new InputStreamReader(

                        resource.getInputStream(),

                        StandardCharsets.UTF_8

                )

        );

        System.out.println("Coding questions imported.");

    }

}