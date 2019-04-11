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
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "price_id", nullable = false)
    private Long priceId;

    public ProductPrice()
    {
    }

    public ProductPrice(Long productId, Long priceId)
    {
        this.productId = productId;
        this.priceId = priceId;
    }
}
