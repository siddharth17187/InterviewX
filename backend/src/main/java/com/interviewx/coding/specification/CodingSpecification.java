package com.interviewx.coding.specification;

import com.interviewx.coding.entity.CodingQuestion;
import com.interviewx.coding.enums.Difficulty;
import org.springframework.data.jpa.domain.Specification;

public class CodingSpecification {

    public static Specification<CodingQuestion> filterQuestions(

            String keyword,

            String topic,

            String difficulty,

            String company

    ) {

        return (root, query, cb) -> {

            Specification<CodingQuestion> spec =
                    Specification.where(null);

            if (keyword != null && !keyword.isBlank()) {

                spec = spec.and((r, q, c) ->

                        c.like(

                                c.lower(r.get("title")),

                                "%" + keyword.toLowerCase() + "%"

                        )

                );

            }

            if (topic != null && !topic.isBlank()) {

                spec = spec.and((r, q, c) ->

                        c.equal(

                                c.lower(r.get("topic")),

                                topic.toLowerCase()

                        )

                );

            }

            if (difficulty != null && !difficulty.isBlank()) {

                spec = spec.and((r, q, c) ->

                        c.equal(

                                r.get("difficulty"),

                                Difficulty.valueOf(
                                        difficulty.toUpperCase()
                                )

                        )

                );

            }

            if (company != null && !company.isBlank()) {

                spec = spec.and((r, q, c) ->

                        c.like(

                                c.lower(r.get("companies")),

                                "%" + company.toLowerCase() + "%"

                        )

                );

            }

            return spec.toPredicate(root, query, cb);

        };

    }

}