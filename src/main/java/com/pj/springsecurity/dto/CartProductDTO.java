package com.pj.springsecurity.dto;

import com.pj.springsecurity.model.cart.Cart;
import com.pj.springsecurity.model.product.Product;
import lombok.Data;

@Data
public class CartProductDTO
{
    private Long id;

    private Product product;

    private Integer quantity;

    private Cart cart;
}
