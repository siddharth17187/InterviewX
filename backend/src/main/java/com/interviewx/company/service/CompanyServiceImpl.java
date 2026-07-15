package com.interviewx.company.service;

import com.interviewx.company.dto.CompanyRequest;
import com.interviewx.company.dto.CompanyResponse;
import com.interviewx.company.entity.Company;
import com.interviewx.company.mapper.CompanyMapper;
import com.interviewx.company.repository.CompanyRepository;
import com.interviewx.company.specification.CompanySpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {

    private final CompanyRepository companyRepository;
    private final CompanyMapper companyMapper;
    private final JobSyncService jobSyncService;

    @Override
    public CompanyResponse createCompany(CompanyRequest request) {

        Company company = companyMapper.toEntity(request);

        Company savedCompany = companyRepository.save(company);

        return companyMapper.toResponse(savedCompany);
    }

    @Override
    public List<CompanyResponse> getAllCompanies() {

        return companyRepository.findAll()
                .stream()
                .map(companyMapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    public CompanyResponse getCompanyById(Long id) {

        Company company = companyRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Company not found"));

        return companyMapper.toResponse(company);
    }

    @Override
    public List<CompanyResponse> searchCompanies(String keyword) {

        Specification<Company> specification =
                CompanySpecification.filterJobs(
                        keyword,
                        null,
                        null,
                        null
                );

        return companyRepository.findAll(specification)
                .stream()
                .map(companyMapper::toResponse)
                .toList();
    }

    @Override
    public int syncJobs(String keyword) {

        return jobSyncService.syncJobs(keyword);
    }

    @Override
    public Page<CompanyResponse> getJobs(

            String keyword,

            String location,

            String jobType,

            String experience,

            int page,

            int size,

            String sortBy,

            String direction

    ) {

        Sort sort = direction.equalsIgnoreCase("desc")
                ? Sort.by(sortBy).descending()
                : Sort.by(sortBy).ascending();

        Pageable pageable =
                PageRequest.of(page, size, sort);

        Specification<Company> specification =
                CompanySpecification.filterJobs(
                        keyword,
                        location,
                        jobType,
                        experience
                );

        Page<Company> companies =
                companyRepository.findAll(specification, pageable);

        if (companies.isEmpty() && keyword != null && !keyword.isBlank()) {

            try {

                jobSyncService.syncJobs(keyword);

                companies =
                        companyRepository.findAll(
                                specification,
                                pageable
                        );

            } catch (Exception e) {

                System.out.println(
                        "RapidAPI unavailable: " + e.getMessage()
                );

            }

        }

        return companies.map(companyMapper::toResponse);
    }
}