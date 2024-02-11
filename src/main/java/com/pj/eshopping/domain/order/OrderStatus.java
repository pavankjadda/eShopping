package com.pj.eshopping.domain.order;

import com.pj.eshopping.audit.AbstractAuditingEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serial;


@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@Table(name = "order_status")
public class OrderStatus extends AbstractAuditingEntity {
    @Serial
    private static final long serialVersionUID = 3679844999486153457L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "status")
    private String status;

}
