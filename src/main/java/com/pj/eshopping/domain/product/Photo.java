package com.pj.eshopping.domain.product;

import com.pj.eshopping.audit.AbstractAuditingEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@Table(name = "photo")
public class Photo extends AbstractAuditingEntity implements Serializable {
    @Serial
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;
}
