package com.pj.springsecurity.model.cart;

import com.pj.springsecurity.model.AbstractAuditingEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Cache(region = "cartCache",usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "cart_status")
public class CartStatus extends AbstractAuditingEntity
{
    private static final long serialVersionUID = -4128436827005113690L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "status")
    private String status;
}
