package com.interviewx.profile.service;

import com.interviewx.auth.entity.User;
import com.interviewx.auth.repository.UserRepository;
import com.interviewx.profile.dto.ProfileResponse;
import com.interviewx.profile.dto.UpdateProfileRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
@RequiredArgsConstructor

public class ProfileServiceImpl implements ProfileService {
        @Value("${file.upload-dir}")
private String uploadDir;

    private final UserRepository userRepository;

    @Override
    public ProfileResponse getProfile(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return ProfileResponse.builder()
                .fullName(user.getFullName())
                .email(user.getEmail())
                .phone(user.getPhone())
                .profileImage(user.getProfileImage())
                .college(user.getCollege())
                .degree(user.getDegree())
                .branch(user.getBranch())
                .graduationYear(user.getGraduationYear())
                .cgpa(user.getCgpa())
                .skills(user.getSkills())
                .bio(user.getBio())
                .githubUrl(user.getGithubUrl())
                .linkedinUrl(user.getLinkedinUrl())
                .portfolioUrl(user.getPortfolioUrl())
                .resumeUrl(user.getResumeUrl())
                .role(user.getRole().name())
                .build();
    }

    @Override
    public ProfileResponse updateProfile(
            String email,
            UpdateProfileRequest request) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setFullName(request.getFullName());
        user.setPhone(request.getPhone());
        user.setCollege(request.getCollege());
        user.setDegree(request.getDegree());
        user.setBranch(request.getBranch());
        user.setGraduationYear(request.getGraduationYear());
        user.setCgpa(request.getCgpa());
        user.setSkills(request.getSkills());
        user.setBio(request.getBio());
        user.setGithubUrl(request.getGithubUrl());
        user.setLinkedinUrl(request.getLinkedinUrl());
        user.setPortfolioUrl(request.getPortfolioUrl());

        userRepository.save(user);

        return getProfile(email);
    }
    @Override
public String uploadProfileImage(
        String email,
        MultipartFile file) {

    try {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        String fileName =
                UUID.randomUUID() + "_" + file.getOriginalFilename();

        Path uploadPath = Paths.get(uploadDir, "profile");

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        Path filePath = uploadPath.resolve(fileName);

        Files.copy(
                file.getInputStream(),
                filePath,
                StandardCopyOption.REPLACE_EXISTING);

        String imageUrl = "/uploads/profile/" + fileName;

        user.setProfileImage(imageUrl);

        userRepository.save(user);

        return imageUrl;

    } catch (IOException e) {

        throw new RuntimeException("Failed to upload image", e);

    }
}
}