package com.springtesting.model;


import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "product_price")
@Data
public class ProductPrice
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "product_id",nullable = false)
    private String productId;

    @Column(name = "price_id",nullable = false)
    private Long priceId;

    public ProductPrice() {}

    public ProductPrice(String productId, Long priceId)
    {
        this.productId = productId;
        this.priceId = priceId;
    }
}
