package com.interviewx.admin.service;

import com.interviewx.admin.dto.UserListResponse;

public interface AdminService {

    UserListResponse getAllUsers();

    void deleteUser(String id);

}