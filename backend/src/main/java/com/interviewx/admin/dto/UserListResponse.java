package com.interviewx.admin.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserListResponse {

    private long totalUsers;

    private List<UserResponse> users;

}