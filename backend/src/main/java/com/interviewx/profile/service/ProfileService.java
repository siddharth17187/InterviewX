package com.interviewx.profile.service;

import com.interviewx.profile.dto.ProfileResponse;
import com.interviewx.profile.dto.UpdateProfileRequest;
import org.springframework.web.multipart.MultipartFile;

public interface ProfileService {

    ProfileResponse getProfile(String email);

    ProfileResponse updateProfile(
            String email,
            UpdateProfileRequest request);

    String uploadProfileImage(
            String email,
            MultipartFile file);
}