package com.interviewx.auth.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "full_name", nullable = false, length = 100)
    private String fullName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AccountStatus status;

    @Column(name = "email_verified")
    private boolean emailVerified;

    // Forgot Password Fields
    @Column(name = "otp")
    private String otp;

    @Column(name = "otp_expiry")
    private LocalDateTime otpExpiry;

    @Column(name = "reset_verified")
    private Boolean resetVerified;

    @Column(name = "profile_image")
    private String profileImage;

    @Column(name = "last_login")
    private LocalDateTime lastLogin;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @Column(length = 15)
private String phone;

@Column(length = 150)
private String college;

@Column(length = 100)
private String degree;

@Column(length = 100)
private String branch;

private Integer graduationYear;

private Double cgpa;

@Column(length = 500)
private String skills;

@Column(length = 1000)
private String bio;

private String githubUrl;

private String linkedinUrl;

private String portfolioUrl;

private String resumeUrl;
}