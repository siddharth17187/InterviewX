package com.interviewx.company.service;

import com.interviewx.company.dto.CompanyResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RedisCacheService {

    private final RedisTemplate<String, Object> redisTemplate;

    private static final Duration TTL = Duration.ofHours(1);

    private String getKey(String keyword) {
        return "jobs:" + keyword.toLowerCase().trim();
    }

    @SuppressWarnings("unchecked")
    public List<CompanyResponse> getJobs(String keyword) {

        Object data = redisTemplate.opsForValue().get(getKey(keyword));

        if (data == null) {
            return null;
        }

        return (List<CompanyResponse>) data;
    }

    public void saveJobs(String keyword, List<CompanyResponse> jobs) {

        redisTemplate.opsForValue().set(
                getKey(keyword),
                jobs,
                TTL
        );
    }

    public void deleteJobs(String keyword) {

        redisTemplate.delete(getKey(keyword));
    }

    public void clearAll() {

        redisTemplate.getConnectionFactory()
                .getConnection()
                .serverCommands()
                .flushDb();
    }
}