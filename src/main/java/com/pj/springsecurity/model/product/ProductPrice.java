package com.pj.springsecurity.model.product;


import com.pj.springsecurity.model.AbstractAuditingEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "product_price")
@Cache(region = "productPriceCache",usage = CacheConcurrencyStrategy.READ_WRITE)
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
