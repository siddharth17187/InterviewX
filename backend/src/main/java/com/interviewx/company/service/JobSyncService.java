package com.interviewx.company.service;

import com.interviewx.company.dto.JobApiResponse;
import com.interviewx.company.dto.JobDto;
import com.interviewx.company.entity.Company;
import com.interviewx.company.repository.CompanyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class JobSyncService {

    private final JobApiService jobApiService;
    private final CompanyRepository companyRepository;

    public int syncJobs(String keyword) {

        int saved = 0;

        for (int page = 1; page <= 10; page++) {

            JobApiResponse response =
                    jobApiService.searchJobs(keyword, page);

            if (response == null
                    || response.getData() == null
                    || response.getData().getJobs() == null
                    || response.getData().getJobs().isEmpty()) {

                break;
            }

            for (JobDto job : response.getData().getJobs()) {

                if (companyRepository
                        .findByExternalJobId(job.getJobId())
                        .isPresent()) {
                    continue;
                }

                Company company = Company.builder()
                        .externalJobId(job.getJobId())
                        .name(job.getEmployerName())
                        .logo(job.getEmployerLogo())
                        .role(job.getJobTitle())
                        .location(job.getJobLocation())
                        .salary(job.getJobSalaryString())
                        .experience("Not Specified")
                        .jobType(job.getJobEmploymentType())
                        .companyUrl(job.getEmployerWebsite())
                        .applyUrl(job.getJobApplyLink())
                        .description(job.getJobDescription())
                        .publisher(job.getJobPublisher())
                        .source("RAPID_API")
                        .liveJob(true)
                        .postedDate(LocalDate.now())
                        .status("ACTIVE")
                        .build();

                companyRepository.save(company);
                saved++;
            }
        }

        return saved;
    }
}