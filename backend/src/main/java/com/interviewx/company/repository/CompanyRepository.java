package com.interviewx.company.repository;

import com.interviewx.company.entity.Company;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface CompanyRepository extends
        JpaRepository<Company, Long>,
        JpaSpecificationExecutor<Company> {

    Optional<Company> findByExternalJobId(String externalJobId);

    Page<Company> findByLiveJobTrue(Pageable pageable);

}