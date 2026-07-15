package com.interviewx.auth.service;

public interface MailService {

    void sendOtp(String to, String otp);

}