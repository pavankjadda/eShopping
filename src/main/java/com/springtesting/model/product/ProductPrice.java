package com.springtesting.model.product;


import com.springtesting.model.AbstractAuditingEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "product_price")
@Data
public class ProductPrice extends AbstractAuditingEntity
{
    private static final long serialVersionUID = 2677217467401857039L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "price_id", nullable = false)
    private Long priceId;
}
