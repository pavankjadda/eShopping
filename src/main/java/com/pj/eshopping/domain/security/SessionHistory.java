package com.pj.eshopping.domain.security;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.proxy.HibernateProxy;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Getter
@Setter
@ToString
@Table(name = "session_history")
public class SessionHistory implements Serializable {
    @Serial
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

    @Override
    public final int hashCode() {
        return this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass().hashCode() : getClass().hashCode();
    }

    @Override
    public final boolean equals(Object o) {
        if (this == o) return true;
        if (o == null) return false;
        Class<?> oEffectiveClass =
                o instanceof HibernateProxy ? ((HibernateProxy) o).getHibernateLazyInitializer().getPersistentClass() :
                        o.getClass();
        Class<?> thisEffectiveClass = this instanceof HibernateProxy ?
                ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass() : this.getClass();
        if (thisEffectiveClass != oEffectiveClass) return false;
        SessionHistory that = (SessionHistory) o;
        return getId() != null && Objects.equals(getId(), that.getId());
    }
}