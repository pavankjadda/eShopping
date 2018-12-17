package com.springtesting.dto;

import lombok.Data;

import java.util.Date;

@Data
public class ActiveSessionDto
{
    private String username;
    private Date lastRequest;
    private String sessionId;
    private boolean expired = false;

    public ActiveSessionDto()
    {
    }

    public ActiveSessionDto(String username, Date lastRequest, String sessionId, boolean expired)
    {
        this.username = username;
        this.lastRequest = lastRequest;
        this.sessionId = sessionId;
        this.expired = expired;
    }
}
