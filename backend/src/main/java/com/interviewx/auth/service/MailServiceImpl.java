package com.interviewx.auth.service;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MailServiceImpl implements MailService {

    private final JavaMailSender mailSender;

    @Override
    public void sendOtp(String to, String otp) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(to);

        message.setSubject("InterviewX Password Reset OTP");

        message.setText(
                "Hello,\n\n"
                        + "Your InterviewX OTP is: "
                        + otp
                        + "\n\n"
                        + "This OTP is valid for 10 minutes.\n\n"
                        + "Do not share this OTP with anyone.\n\n"
                        + "Regards,\n"
                        + "InterviewX Team"
        );

        mailSender.send(message);
    }
}