
package com.interviewx.auth.service;

import com.interviewx.auth.dto.ForgotPasswordRequest;
import com.interviewx.auth.dto.ForgotPasswordResponse;
import com.interviewx.auth.dto.GoogleLoginRequest;
import com.interviewx.auth.dto.LoginRequest;
import com.interviewx.auth.dto.LoginResponse;
import com.interviewx.auth.dto.RegisterRequest;
import com.interviewx.auth.dto.RegisterResponse;
import com.interviewx.auth.entity.AccountStatus;
import com.interviewx.auth.entity.Role;
import com.interviewx.auth.entity.User;
import com.interviewx.auth.repository.UserRepository;
import com.interviewx.auth.security.JwtService;
import com.interviewx.exception.EmailAlreadyExistsException;

import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;
import com.interviewx.auth.dto.VerifyOtpRequest;
import com.interviewx.auth.dto.VerifyOtpResponse;
import com.interviewx.auth.dto.ResetPasswordRequest;
import com.interviewx.auth.dto.ResetPasswordResponse;

import com.interviewx.auth.service.MailService;
import com.interviewx.auth.dto.GoogleUserInfo;
import com.interviewx.auth.security.GoogleTokenVerifier;
import java.util.UUID;
@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final GoogleTokenVerifier googleTokenVerifier;
    private final MailService mailService;
    @Override
    public RegisterResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new EmailAlreadyExistsException("Email already exists");
        }

        User user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
               .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.STUDENT)
                .status(AccountStatus.ACTIVE)
                .emailVerified(false)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        User savedUser = userRepository.save(user);

        return RegisterResponse.builder()
                .id(savedUser.getId())
                .fullName(savedUser.getFullName())
                .email(savedUser.getEmail())
                .message("Registration Successful")
                .build();
    }
   @Override
public LoginResponse login(LoginRequest request) {

    System.out.println("===== LOGIN API HIT =====");
    System.out.println("Email: " + request.getEmail());

    User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("Invalid Email"));

    System.out.println("User Found: " + user.getEmail());

    boolean match = passwordEncoder.matches(
            request.getPassword(),
            user.getPassword());

    System.out.println("Password Match = " + match);

    if (!match) {
        throw new RuntimeException("Invalid Password");
    }

    String token = jwtService.generateToken(user.getEmail());

    System.out.println("Token Generated");

    return LoginResponse.builder()
            .token(token)
            .fullName(user.getFullName())
            .email(user.getEmail())
            .role(user.getRole().name())
            .build();
}

@Override
public LoginResponse googleLogin(GoogleLoginRequest request) {

    GoogleUserInfo googleUser =
            googleTokenVerifier.verify(request.getCredential());

    User user = userRepository.findByEmail(googleUser.getEmail())
            .orElse(null);

    if (user == null) {

        user = User.builder()
                .fullName(googleUser.getName())
                .email(googleUser.getEmail())
                .password(passwordEncoder.encode(UUID.randomUUID().toString()))
                .role(Role.STUDENT)
                .status(AccountStatus.ACTIVE)
                .emailVerified(true)
                .profileImage(googleUser.getPicture())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        userRepository.save(user);
    }

    String token = jwtService.generateToken(user.getEmail());

    return LoginResponse.builder()
            .token(token)
            .fullName(user.getFullName())
            .email(user.getEmail())
            .role(user.getRole().name())
            .build();
}

@Override
public ForgotPasswordResponse forgotPassword(ForgotPasswordRequest request) {

    User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("Email not found"));

    String otp = String.format("%06d", new Random().nextInt(1000000));

    user.setOtp(otp);
    user.setOtpExpiry(LocalDateTime.now().plusMinutes(10));
    user.setResetVerified(false);

    userRepository.save(user);

    // Send OTP email
    mailService.sendOtp(user.getEmail(), otp);

    return ForgotPasswordResponse.builder()
            .message("OTP sent successfully to your email.")
            .build();
}
@Override
public VerifyOtpResponse verifyOtp(VerifyOtpRequest request) {

    User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("Email not found"));

    if (user.getOtp() == null) {
        throw new RuntimeException("OTP not generated");
    }

    if (!user.getOtp().equals(request.getOtp())) {
        throw new RuntimeException("Invalid OTP");
    }

    if (user.getOtpExpiry().isBefore(LocalDateTime.now())) {
        throw new RuntimeException("OTP Expired");
    }

    user.setResetVerified(true);
    userRepository.save(user);

    return VerifyOtpResponse.builder()
            .message("OTP Verified Successfully")
            .build();
}
@Override
public ResetPasswordResponse resetPassword(
        ResetPasswordRequest request) {

    User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("Email not found"));

    if (Boolean.FALSE.equals(user.getResetVerified())) {
        throw new RuntimeException("OTP verification required");
    }

    user.setPassword(
            passwordEncoder.encode(request.getNewPassword()));

    user.setOtp(null);
    user.setOtpExpiry(null);
    user.setResetVerified(false);

    userRepository.save(user);

    return ResetPasswordResponse.builder()
            .message("Password Reset Successful")
            .build();
}

}