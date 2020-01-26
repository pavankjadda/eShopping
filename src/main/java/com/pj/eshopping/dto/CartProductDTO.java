package com.pj.eshopping.dto;

import com.pj.eshopping.domain.cart.Cart;
import com.pj.eshopping.domain.product.Product;
import lombok.Data;

import java.io.Serializable;

@Data
public class CartProductDTO implements Serializable
{
	private static final long serialVersionUID = -2831775607040245737L;
	private Long id;
	private Product product;
	private Integer quantity;
	private Cart cart;
}
