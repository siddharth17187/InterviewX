package com.interviewx.admin.service;

import com.interviewx.admin.dto.UserListResponse;
import com.interviewx.admin.dto.UserResponse;
import com.interviewx.auth.entity.User;
import com.interviewx.auth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {

    private final UserRepository userRepository;

    @Override
    public UserListResponse getAllUsers() {

        List<UserResponse> users = userRepository.findAll()

                .stream()

                .map(this::mapToResponse)

                .toList();

        return UserListResponse.builder()

                .totalUsers(userRepository.count())

                .users(users)

                .build();

    }

    @Override
    public void deleteUser(String id) {

        userRepository.deleteById(UUID.fromString(id));

    }

    private UserResponse mapToResponse(User user) {

        return UserResponse.builder()

                .id(user.getId())

                .fullName(user.getFullName())

                .email(user.getEmail())

                .role(user.getRole().name())

                .status(user.getStatus().name())

                .createdAt(user.getCreatedAt())

                .build();

    }

}