package com.pj.eshopping.domain.user;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serial;
import java.io.Serializable;
import java.util.Collection;


@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "`user`")
public class User extends AbstractAuditingEntity implements Serializable {
    @Serial
    private static final long serialVersionUID = -1742305710555210987L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "active")
    private Boolean active;

    @Column(name = "credentials_non_expired")
    private Boolean credentialsNonExpired;

    @Column(name = "account_non_locked")
    private Boolean accountNonLocked;

    @Column(name = "account_non_expired")
    private Boolean accountNonExpired;

    @Column(name = "password", nullable = false)
    @JsonIgnore
    private String password;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "user")
    @JoinColumn(name = "user_profile_id")
    @JsonBackReference
    private UserProfile userProfile;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    @JsonManagedReference
    private Collection<Role> roles;

    public User() {
    }

    public User(String username, String password, Boolean active, UserProfile userProfile) {
        this.username = username;
        this.password = password;
        this.active = active;
        this.userProfile = userProfile;
    }

    @Override
    public String toString() {
        return "User{" + "id=" + id + ", username='" + username + '\'' + ", active=" + active + ", password='" + password + '\'' + '}';
    }
}
