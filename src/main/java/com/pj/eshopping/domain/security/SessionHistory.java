package com.pj.eshopping.domain.security;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "session_history")
public class SessionHistory
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "username")
	private String username;

	@Column(name = "logged_date_time")
	private LocalDateTime loggedDataTime;

	@Column(name = "session_id")
	private String sessionId;

	@Column(name = "creation_time")
	private LocalDateTime creationTime;

	@Column(name = "last_access_time")
	private LocalDateTime lastAccessTime;

	@Column(name = "max_inactive_interval")
	private long maxInactiveInterval;

	@Column(name = "requester_ip_address")
	private String requesterIpAddress;

	@Column(name = "requester_port")
	private int requesterPort;

	@Column(name = "requested_method")
	private String requestedMethod;

	@Column(name = "local_ip_address")
	private String localIpAddress;

	@Column(name = "local_port")
	private int localPort;

	@Column(name = "server_name")
	private String serverName;

	@Column(name = "server_port")
	private int serverPort;

	@Column(name = "browser_information")
	private String browserInformation;

	@Column(name = "browser_name")
	private String browserName;

	@Column(name = "auth_type")
	private String authType;

	@Column(name = "raw_information", length = 10000)
	private String rawInformation;

}
