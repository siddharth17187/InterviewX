package com.interviewx.auth.service;

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

public interface AuthService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    ForgotPasswordResponse forgotPassword(ForgotPasswordRequest request);
    
    VerifyOtpResponse verifyOtp(VerifyOtpRequest request);

    ResetPasswordResponse resetPassword(
        ResetPasswordRequest request);

        LoginResponse googleLogin(GoogleLoginRequest request);
}