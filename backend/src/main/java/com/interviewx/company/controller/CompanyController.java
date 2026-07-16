package com.interviewx.company.controller;

import com.interviewx.common.ApiResponse;
import com.interviewx.company.dto.CompanyRequest;
import com.interviewx.company.dto.CompanyResponse;
import com.interviewx.company.service.CompanyService;
import com.interviewx.company.service.JobSyncService;
import com.interviewx.company.service.RedisCacheService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/companies")
@RequiredArgsConstructor

public class CompanyController {

    private final CompanyService companyService;
    private final JobSyncService jobSyncService;
    private final RedisCacheService redisCacheService;

    @PostMapping
    public ApiResponse<CompanyResponse> createCompany(
            @RequestBody CompanyRequest request) {

        CompanyResponse response = companyService.createCompany(request);

        return ApiResponse.<CompanyResponse>builder()
                .success(true)
                .message("Company created successfully")
                .data(response)
                .build();
    }

    @GetMapping
    public ApiResponse<List<CompanyResponse>> getAllCompanies() {

        return ApiResponse.<List<CompanyResponse>>builder()
                .success(true)
                .message("Companies fetched successfully")
                .data(companyService.getAllCompanies())
                .build();
    }

    @GetMapping("/{id}")
    public ApiResponse<CompanyResponse> getCompanyById(
            @PathVariable Long id) {

        return ApiResponse.<CompanyResponse>builder()
                .success(true)
                .message("Company fetched successfully")
                .data(companyService.getCompanyById(id))
                .build();
    }

    @GetMapping("/search")
    public ApiResponse<List<CompanyResponse>> searchCompanies(
            @RequestParam String keyword) {

        return ApiResponse.<List<CompanyResponse>>builder()
                .success(true)
                .message("Search completed successfully")
                .data(companyService.searchCompanies(keyword))
                .build();
    }

    @PostMapping("/sync")
    public ApiResponse<String> syncJobs(
            @RequestParam String keyword) {

        int count = jobSyncService.syncJobs(keyword);
        redisCacheService.deleteJobs(keyword);

        return ApiResponse.<String>builder()
                .success(true)
                .message(count + " jobs synced successfully")
                .data("SUCCESS")
                .build();
    }

    @GetMapping("/jobs")
    public ApiResponse<Page<CompanyResponse>> jobs(

            @RequestParam(required = false) String keyword,

            @RequestParam(required = false) String location,

            @RequestParam(required = false) String jobType,

            @RequestParam(required = false) String experience,

            @RequestParam(defaultValue = "0") int page,

            @RequestParam(defaultValue = "10") int size,

            @RequestParam(defaultValue = "postedDate") String sortBy,

            @RequestParam(defaultValue = "desc") String direction

    ) {

        return ApiResponse.<Page<CompanyResponse>>builder()
                .success(true)
                .message("Jobs fetched successfully")
                .data(
                        companyService.getJobs(
                                keyword,
                                location,
                                jobType,
                                experience,
                                page,
                                size,
                                sortBy,
                                direction
                        )
                )
                .build();
    }
}