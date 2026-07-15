package com.interviewx.company.service;

import com.interviewx.company.dto.JobApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
@RequiredArgsConstructor
public class JobApiService {

    private final RestTemplate restTemplate;

    @Value("${rapidapi.key}")
    private String apiKey;

    @Value("${rapidapi.host}")
    private String apiHost;

    @Value("${rapidapi.url}")
    private String apiUrl;

   public JobApiResponse searchJobs(String keyword, int page) {

    String url = UriComponentsBuilder
            .fromHttpUrl(apiUrl)
            .queryParam("query", keyword)
            .queryParam("page", page)
            .queryParam("num_pages", 1)
            .queryParam("country", "in")
            .toUriString();

    HttpHeaders headers = new HttpHeaders();
    headers.set("X-RapidAPI-Key", apiKey);
    headers.set("X-RapidAPI-Host", apiHost);

    HttpEntity<String> entity = new HttpEntity<>(headers);

    ResponseEntity<JobApiResponse> response =
            restTemplate.exchange(
                    url,
                    HttpMethod.GET,
                    entity,
                    JobApiResponse.class
            );

    return response.getBody();
}
}