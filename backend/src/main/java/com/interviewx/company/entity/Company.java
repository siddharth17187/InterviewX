package com.interviewx.company.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(
        name = "companies",
        indexes = {
                @Index(name = "idx_company_name", columnList = "name"),
                @Index(name = "idx_company_role", columnList = "role"),
                @Index(name = "idx_external_job", columnList = "externalJobId")
        }
)
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // RapidAPI Job ID
    @Column(unique = true)
    private String externalJobId;

    @Column(nullable = false)
    private String name;

    private String logo;

    @Column(nullable = false)
    private String role;

    private String location;

    private String salary;

    private String experience;

    private String jobType;

    private String companyUrl;

    private String applyUrl;

    // LinkedIn / Glassdoor / Indeed etc.
    private String publisher;

    // RAPID_API / MANUAL
    private String source;

    // true = live job
    private Boolean liveJob;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(columnDefinition = "TEXT")
    private String responsibilities;

    @Column(columnDefinition = "TEXT")
    private String requirements;

    @Column(columnDefinition = "TEXT")
    private String skills;

    private LocalDate postedDate;

    private LocalDate deadline;

    private String status;
}