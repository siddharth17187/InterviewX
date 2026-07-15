package com.interviewx.company.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class JobDto {

    @JsonProperty("job_id")
    private String jobId;

    @JsonProperty("job_title")
    private String jobTitle;

    @JsonProperty("employer_name")
    private String employerName;

    @JsonProperty("employer_logo")
    private String employerLogo;

    @JsonProperty("employer_website")
    private String employerWebsite;

    @JsonProperty("job_city")
    private String jobCity;

    @JsonProperty("job_state")
    private String jobState;

    @JsonProperty("job_country")
    private String jobCountry;

    @JsonProperty("job_location")
    private String jobLocation;

    @JsonProperty("job_employment_type")
    private String jobEmploymentType;

    @JsonProperty("job_apply_link")
    private String jobApplyLink;

    @JsonProperty("job_description")
    private String jobDescription;

    @JsonProperty("job_salary")
    private String jobSalary;

    @JsonProperty("job_salary_string")
    private String jobSalaryString;

    @JsonProperty("job_is_remote")
    private Boolean jobIsRemote;

    @JsonProperty("job_posted_at")
    private String jobPostedAt;

    @JsonProperty("job_posted_at_datetime_utc")
    private String jobPostedDate;

    @JsonProperty("job_publisher")
    private String jobPublisher;
}