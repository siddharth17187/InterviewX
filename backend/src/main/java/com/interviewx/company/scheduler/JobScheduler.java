package com.interviewx.company.scheduler;

import com.interviewx.company.service.JobSyncService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class JobScheduler {

    private final JobSyncService jobSyncService;

    @Scheduled(cron = "0 0 */6 * * *")
    public void syncJobs() {

        log.info("===== JOB SYNC STARTED =====");

        String[] keywords = {
                "Software Engineer",
                "Java Developer",
                "React Developer",
                "Spring Boot",
                "Full Stack Developer",
                "Backend Developer",
                "Frontend Developer",
                "Python Developer",
                "DevOps Engineer",
                "Data Engineer",
                "Cloud Engineer",
                "QA Engineer",
                "UI UX Designer",
                "Machine Learning",
                "Cyber Security",
                "Internship"
        };

        for (String keyword : keywords) {
            try {
                int count = jobSyncService.syncJobs(keyword);
                log.info("{} -> {} jobs synced", keyword, count);
            } catch (Exception e) {
                log.error("Failed syncing {}", keyword, e);
            }
        }

        log.info("===== JOB SYNC COMPLETED =====");
    }
}