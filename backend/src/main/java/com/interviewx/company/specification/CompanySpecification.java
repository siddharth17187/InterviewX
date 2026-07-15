package com.interviewx.company.specification;

import com.interviewx.company.entity.Company;
import org.springframework.data.jpa.domain.Specification;

public class CompanySpecification {

    public static Specification<Company> filterJobs(

            String keyword,
            String location,
            String jobType,
            String experience

    ) {

        return (root, query, cb) -> {

            Specification<Company> spec = Specification.where(null);

            if (keyword != null && !keyword.isBlank()) {

                spec = spec.and((r, q, c) ->

                        c.or(

                                c.like(
                                        c.lower(r.get("name")),
                                        "%" + keyword.toLowerCase() + "%"
                                ),

                                c.like(
                                        c.lower(r.get("role")),
                                        "%" + keyword.toLowerCase() + "%"
                                )

                        )

                );
            }

            if (location != null && !location.isBlank()) {

                spec = spec.and((r, q, c) ->

                        c.like(
                                c.lower(r.get("location")),
                                "%" + location.toLowerCase() + "%"
                        )

                );
            }

            if (jobType != null && !jobType.isBlank()) {

                spec = spec.and((r, q, c) ->

                        c.equal(
                                c.lower(r.get("jobType")),
                                jobType.toLowerCase()
                        )

                );
            }

            if (experience != null && !experience.isBlank()) {

                spec = spec.and((r, q, c) ->

                        c.like(
                                c.lower(r.get("experience")),
                                "%" + experience.toLowerCase() + "%"
                        )

                );
            }

            return spec.toPredicate(root, query, cb);

        };
    }
}