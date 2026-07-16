package com.interviewx.auth.controller;

import com.interviewx.auth.dto.ForgotPasswordRequest;
import com.interviewx.auth.dto.ForgotPasswordResponse;
import com.interviewx.auth.dto.GoogleLoginRequest;
import com.interviewx.auth.dto.LoginRequest;
import com.interviewx.auth.dto.LoginResponse;
import com.interviewx.auth.dto.RegisterRequest;
import com.interviewx.auth.dto.RegisterResponse;
import com.interviewx.auth.dto.ResetPasswordRequest;
import com.interviewx.auth.dto.ResetPasswordResponse;
import com.interviewx.auth.dto.VerifyOtpRequest;
import com.interviewx.auth.dto.VerifyOtpResponse;
import com.interviewx.auth.service.AuthService;
import com.interviewx.common.ApiResponse;


import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = {
    "http://localhost:5173", 
    "https://interview-x-unl2-qyb122ut6-siddharth1718.vercel.app"
})
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ApiResponse<RegisterResponse> register(
            @Valid @RequestBody RegisterRequest request) {

        RegisterResponse response = authService.register(request);

        return ApiResponse.<RegisterResponse>builder()
                .success(true)
                .message("Registration Successful")
                .data(response)
                .build();
    }

    @PostMapping("/login")
    public ApiResponse<LoginResponse> login(
            @Valid @RequestBody LoginRequest request) {

        LoginResponse response = authService.login(request);

        return ApiResponse.<LoginResponse>builder()
                .success(true)
                .message("Login Successful")
                .data(response)
                .build();
    }

    @PostMapping("/forgot-password")
    public ApiResponse<ForgotPasswordResponse> forgotPassword(
            @Valid @RequestBody ForgotPasswordRequest request) {

        ForgotPasswordResponse response = authService.forgotPassword(request);

        return ApiResponse.<ForgotPasswordResponse>builder()
                .success(true)
                .message("OTP Sent Successfully")
                .data(response)
                .build();
    }
    @PostMapping("/verify-otp")
public ApiResponse<VerifyOtpResponse> verifyOtp(
        @Valid @RequestBody VerifyOtpRequest request) {

    VerifyOtpResponse response = authService.verifyOtp(request);

    return ApiResponse.<VerifyOtpResponse>builder()
            .success(true)
            .message("OTP Verified")
            .data(response)
            .build();
}

@PostMapping("/reset-password")
public ApiResponse<ResetPasswordResponse> resetPassword(
        @Valid @RequestBody ResetPasswordRequest request) {

    ResetPasswordResponse response =
            authService.resetPassword(request);

    return ApiResponse.<ResetPasswordResponse>builder()
            .success(true)
            .message("Password Reset Successful")
            .data(response)
            .build();
}

@PostMapping("/google")
public ApiResponse<LoginResponse> googleLogin(
        @RequestBody GoogleLoginRequest request) {

    LoginResponse response = authService.googleLogin(request);

    return ApiResponse.<LoginResponse>builder()
            .success(true)
            .message("Google Login Successful")
            .data(response)
            .build();
}
}