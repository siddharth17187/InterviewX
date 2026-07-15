package com.interviewx.company.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CompanyResponse {

    private Long id;

    private String name;

    private String logo;

    private String role;

    private String location;

    private String salary;

    private String experience;

    private String jobType;

    private String deadline;

    private String description;

    private String applyLink;

    private String companyUrl;

    private String postedDate;

    private String status;
}