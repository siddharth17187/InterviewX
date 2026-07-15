package com.interviewx.admin.dto;

import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserResponse {

    private UUID id;

    private String fullName;

    private String email;

    private String role;

    private String status;

    private LocalDateTime createdAt;

}