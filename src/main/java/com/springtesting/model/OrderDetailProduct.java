package com.springtesting.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "order_detail_products")
public class OrderDetailProduct extends AbstractAuditingEntity
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "order_detail_id")
    private Long orderDetailId;

    @Column(name = "product_id")
    private Long productId;


    public OrderDetailProduct()
    {
    }

    public OrderDetailProduct(Long orderDetailId, Long productId)
    {
        this.orderDetailId = orderDetailId;
        this.productId = productId;
    }


}
