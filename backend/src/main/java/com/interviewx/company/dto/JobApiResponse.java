package com.interviewx.company.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class JobApiResponse {

    private String status;

    @JsonProperty("data")
    private JobData data;

    @Data
    public static class JobData {

        @JsonProperty("jobs")
        private List<JobDto> jobs;

    }

}