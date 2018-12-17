package com.springtesting.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@Table(name = "locked")
public class LockedUserAccountHistory
{
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "locked_date_and_time")
    private LocalDateTime lockedDateAndTime;

    @Column(name = "reason")
    private String reason;

    @Column(name = "additional_comments")
    private String additionalComments;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


}
