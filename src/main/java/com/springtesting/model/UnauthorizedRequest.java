package com.springtesting.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "unauthorized_request")
public class UnauthorizedRequest implements Serializable
{
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "logged_date_time")
    private LocalDateTime loggedDataTime;

    @Column(name = "requester_ip_address")
    private String requesterIpAddress ;

    @Column(name = "requester_port")
    private int requesterPort ;

    @Column(name = "requested_method")
    private String requestedMethod ;

    @Column(name = "local_ip_address")
    private String localIpAddress ;

    @Column(name = "local_port")
    private int localPort ;

    @Column(name = "server_name")
    private String serverName ;

    @Column(name = "server_port")
    private int serverPort ;

    @Column(name = "browser_information")
    private String browserInformation;

    @Column(name = "browser_name")
    private String browserName;

    @Column(name = "auth_type")
    private String authType;

    @Column(name = "exception_message",length = 10000)
    private String exceptionMessage;


}
