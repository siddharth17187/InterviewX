package com.interviewx.company.service;

import com.interviewx.company.dto.CompanyRequest;
import com.interviewx.company.dto.CompanyResponse;

import java.util.List;
import org.springframework.data.domain.Page;
;

public interface CompanyService {

    CompanyResponse createCompany(CompanyRequest request);

    List<CompanyResponse> getAllCompanies();

    CompanyResponse getCompanyById(Long id);

    List<CompanyResponse> searchCompanies(String keyword);
    

     int syncJobs(String keyword);
     Page<CompanyResponse> getJobs(

        String keyword,

        String location,

        String jobType,

        String experience,

        int page,

        int size,

        String sortBy,

        String direction

);

}