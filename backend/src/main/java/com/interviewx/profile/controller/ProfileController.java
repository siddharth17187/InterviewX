package com.interviewx.profile.controller;

import com.interviewx.common.ApiResponse;
import com.interviewx.profile.dto.ProfileResponse;
import com.interviewx.profile.dto.UpdateProfileRequest;
import com.interviewx.profile.service.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
@RestController
@RequestMapping("/api/v1/profile")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ProfileController {

    private final ProfileService profileService;

    @GetMapping
    public ApiResponse<ProfileResponse> getProfile(
            Authentication authentication) {

        ProfileResponse response =
                profileService.getProfile(authentication.getName());

        return ApiResponse.<ProfileResponse>builder()
                .success(true)
                .message("Profile Fetched Successfully")
                .data(response)
                .build();
    }

    @PutMapping
    public ApiResponse<ProfileResponse> updateProfile(
            Authentication authentication,
            @RequestBody UpdateProfileRequest request) {

        ProfileResponse response =
                profileService.updateProfile(
                        authentication.getName(),
                        request);

        return ApiResponse.<ProfileResponse>builder()
                .success(true)
                .message("Profile Updated Successfully")
                .data(response)
                .build();
    }
    @PostMapping("/upload-image")
public ApiResponse<String> uploadProfileImage(
        Authentication authentication,
        @RequestParam("file") MultipartFile file) {

    String imageUrl = profileService.uploadProfileImage(
            authentication.getName(),
            file);

    return ApiResponse.<String>builder()
            .success(true)
            .message("Profile Image Uploaded Successfully")
            .data(imageUrl)
            .build();
}
}