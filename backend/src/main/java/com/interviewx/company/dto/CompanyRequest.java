package com.interviewx.company.dto;

import lombok.*;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CompanyRequest {

    private String name;

    private String logo;

    private String role;

    private String location;

    private String salary;

    private String experience;

    private String jobType;

    private String companyUrl;

    private String applyUrl;

    private String description;

    private String responsibilities;

    private String requirements;

    private String skills;

    private LocalDate postedDate;

    private LocalDate deadline;

    private String status;
}