package com.springtesting.model.order;

import com.springtesting.model.AbstractAuditingEntity;
import com.springtesting.model.product.Product;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.io.Serializable;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "order_product_detail")
public class OrderProductDetail extends AbstractAuditingEntity implements Serializable
{
    private static final long serialVersionUID = -7153423452702053909L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "original_price")
    private Double originalPrice;

    @Column(name = "discount")
    private Double discount;

    @Column(name = "discounted_price")
    private Double discountedPrice;

    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "quantity")
    private Integer quantity;
}
