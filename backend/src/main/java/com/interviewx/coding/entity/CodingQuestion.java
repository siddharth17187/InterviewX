package com.interviewx.coding.entity;

import com.interviewx.coding.enums.Difficulty;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "coding_questions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CodingQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String topic;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Difficulty difficulty;

    @Column(length = 500)
    private String companies;

    @Column(name = "leetcode_url", length = 1000)
    private String leetcodeUrl;

    @Column(name = "hackerrank_url", length = 1000)
    private String hackerRankUrl;

    @Column(name = "youtube_url", length = 1000)
    private String youtubeUrl;

}