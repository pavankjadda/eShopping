package com.pj.springsecurity.model.order;

import com.pj.springsecurity.audit.AbstractAuditingEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;


@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@Table(name = "order_status")
public class OrderStatus extends AbstractAuditingEntity
{
    private static final long serialVersionUID = 3679844999486153457L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "status")
    private String status;

    public OrderStatus()
    {
    }

    public OrderStatus(String status)
    {
        this.status = status;
    }
}
