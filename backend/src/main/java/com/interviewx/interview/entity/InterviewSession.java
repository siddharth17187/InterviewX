package com.interviewx.interview.entity;

import com.interviewx.auth.entity.User;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;
import java.time.LocalDateTime;
import com.interviewx.interview.enums.InterviewState;


@Entity
@Table(name = "interview_sessions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InterviewSession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false, length = 100)
    private String topic;

    @Column(nullable = false, length = 20)
    private String difficulty;

    @Column(nullable = false)
    private Integer totalQuestions;

    @Column(nullable = false)
    private Integer currentQuestion;

    @Column(nullable = false)
    private Boolean completed;

    @Column(nullable = false)
    private Double overallScore;

    @Column(nullable = false)
    private LocalDateTime startedAt;
    
    @Enumerated(EnumType.STRING)
@Column(nullable = false)
private InterviewState state;

    private LocalDateTime completedAt;
    @OneToMany(
        mappedBy = "session",
        cascade = CascadeType.ALL,
        orphanRemoval = true
        
)
private List<InterviewConversation> conversations;

}