package com.pj.springsecurity.model.product;

import com.pj.springsecurity.audit.AbstractAuditingEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@Cache(region = "photoCache",usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "photo")
public class Photo extends AbstractAuditingEntity implements Serializable
{
    private static final long serialVersionUID = 3373277677411648585L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description")
    private String description;

    @Lob
    @Column(name = "data")
    private byte[] data;
}
