package com.interviewx.auth.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GoogleLoginResponse {

    private String token;
    private String fullName;
    private String email;
    private String role;

}