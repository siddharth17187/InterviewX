package com.interviewx.profile.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProfileResponse {

    private String fullName;

    private String email;

    private String phone;

    private String profileImage;

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

    private String resumeUrl;

    private String role;
}