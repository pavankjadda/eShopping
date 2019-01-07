package com.springtesting.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;

@Entity
@Data
@Table(name = "session_history")
public class SessionHistory extends AbstractAuditingEntity implements Serializable
{
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;


    @Column(name = "session_id")
    private String sessionId;

    @Column(name = "username")
    private String username;

    @Column(name = "login_date_time")
    private LocalDateTime loginDateTime;

    @Column(name = "logout_date_time")
    private LocalDateTime logoutDateTime;


    public SessionHistory() {};

    public SessionHistory(String username, String sessionId,LocalDateTime loginDateTime, LocalDateTime logoutDateTime)
    {
        this.username = username;
        this.loginDateTime = loginDateTime;
        this.logoutDateTime = logoutDateTime;
        this.sessionId=sessionId;
    }

    public SessionHistory(String username)
    {
        this.username = username;
    }

    public SessionHistory(String username, String id, long creationTime)
    {
        this.username = username;
        this.loginDateTime = LocalDateTime.ofInstant(Instant.ofEpochMilli(creationTime), ZoneId.systemDefault());
        this.sessionId=id;
    }
}
