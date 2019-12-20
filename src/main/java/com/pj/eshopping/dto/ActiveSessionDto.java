package com.pj.eshopping.dto;

import com.pj.eshopping.security.MyUserDetails;
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

	public ActiveSessionDto(MyUserDetails myUserDetails)
	{
		this.username = myUserDetails.getUsername();
	}
}
