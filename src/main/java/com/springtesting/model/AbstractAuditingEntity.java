package com.springtesting.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDateTime;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class AbstractAuditingEntity implements Serializable
{
    private static final long serialVersionUID = 1L;

    @CreatedBy
    @Column(name = "created_by",nullable = false, length = 255, updatable = false)
    @JsonIgnore
    private String createdBy;

    @CreatedDate
    @Column(name = "created_date",nullable = true,updatable = false)
    @JsonIgnore
    private LocalDateTime createdDate=LocalDateTime.now();

    @LastModifiedBy
    @Column(name = "last_modified_by", length = 255)
    @JsonIgnore
    private String lastModifiedBy;

    @LastModifiedDate
    @Column(name = "last_modified_date")
    @JsonIgnore
    private LocalDateTime lastModifiedDate=LocalDateTime.now();


    public String getCreatedBy()
    {
        return createdBy;
    }

    public void setCreatedBy(String createdBy)
    {
        this.createdBy = createdBy;
    }

    public LocalDateTime getCreatedDate()
    {
        return createdDate;
    }

    public void setCreatedDate(LocalDateTime createdDate)
    {
        this.createdDate = createdDate;
    }

    public String getLastModifiedBy()
    {
        return lastModifiedBy;
    }

    public void setLastModifiedBy(String lastModifiedBy)
    {
        this.lastModifiedBy = lastModifiedBy;
    }

    public LocalDateTime getLastModifiedDate()
    {
        return lastModifiedDate;
    }

    public void setLastModifiedDate(LocalDateTime lastModifiedDate)
    {
        this.lastModifiedDate = lastModifiedDate;
    }
}
