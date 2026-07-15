package com.interviewx.profile.dto;

import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UpdateProfileRequest {

    @Size(min = 3, max = 100)
    private String fullName;

    private String phone;

    private String college;

    private String degree;

    private String branch;

    private Integer graduationYear;

    private Double cgpa;

    private String skills;

    private String bio;

    private String githubUrl;

    private String linkedinUrl;

    private String portfolioUrl;
}