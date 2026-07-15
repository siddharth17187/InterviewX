package com.interviewx.admin.controller;

import com.interviewx.admin.dto.UserListResponse;
import com.interviewx.admin.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @GetMapping("/users")
    public ResponseEntity<UserListResponse> getAllUsers() {

        return ResponseEntity.ok(
                adminService.getAllUsers()
        );

    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteUser(
            @PathVariable String id
    ) {

        adminService.deleteUser(id);

        return ResponseEntity.noContent().build();

    }

}