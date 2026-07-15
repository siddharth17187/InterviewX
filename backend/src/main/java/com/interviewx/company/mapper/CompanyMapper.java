package com.interviewx.company.mapper;

import com.interviewx.company.dto.CompanyRequest;
import com.interviewx.company.dto.CompanyResponse;
import com.interviewx.company.dto.JobDto;
import com.interviewx.company.entity.Company;
import org.springframework.stereotype.Component;

@Component
public class CompanyMapper {

    public Company toEntity(CompanyRequest request) {

        return Company.builder()
                .name(request.getName())
                .logo(request.getLogo())
                .role(request.getRole())
                .location(request.getLocation())
                .salary(request.getSalary())
                .experience(request.getExperience())
                .jobType(request.getJobType())
                .companyUrl(request.getCompanyUrl())
                .applyUrl(request.getApplyUrl())
                .description(request.getDescription())
                .responsibilities(request.getResponsibilities())
                .requirements(request.getRequirements())
                .skills(request.getSkills())
                .postedDate(request.getPostedDate())
                .deadline(request.getDeadline())
                .status(request.getStatus())
                .build();
    }

    public CompanyResponse toResponse(Company company) {

        return CompanyResponse.builder()
                .id(company.getId())
                .name(company.getName())
                .logo(company.getLogo())
                .role(company.getRole())
                .location(company.getLocation())
                .salary(company.getSalary())
                .experience(company.getExperience())
                .jobType(company.getJobType())
                .postedDate(
    company.getPostedDate() != null
        ? company.getPostedDate().toString()
        : null
)
                .description(company.getDescription())
                .applyLink(company.getApplyUrl())
                .companyUrl(company.getCompanyUrl())
                
                .status(company.getStatus())
                .build();
    }

    public CompanyResponse fromJobDto(JobDto job) {

        String location = "";

        if (job.getJobCity() != null && !job.getJobCity().isBlank()) {
            location = job.getJobCity();
        }

        if (job.getJobCountry() != null && !job.getJobCountry().isBlank()) {
            if (!location.isEmpty()) {
                location += ", ";
            }
            location += job.getJobCountry();
        }

        return CompanyResponse.builder()
                .id(System.currentTimeMillis())
                .name(job.getEmployerName())
                .logo(job.getEmployerLogo())
                .role(job.getJobTitle())
                .location(location)
                .salary("Not Disclosed")
                .experience("Not Specified")
                .jobType(job.getJobEmploymentType())
                .description(job.getJobDescription())
                .applyLink(job.getJobApplyLink())
                .companyUrl(job.getEmployerWebsite())
                .postedDate(job.getJobPostedDate())
                .deadline("Open")
                .status("ACTIVE")
                .build();
    }
}