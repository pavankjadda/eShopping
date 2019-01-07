package com.springtesting.dto;

import com.springtesting.security.MyUserDetails;
import lombok.Data;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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

    public ActiveSessionDto(MyUserDetails myUserDetails, HttpServletRequest request, HttpServletResponse response)
    {
        this.username=myUserDetails.getUsername();
    }
}
