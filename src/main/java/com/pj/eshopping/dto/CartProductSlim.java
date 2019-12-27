package com.pj.eshopping.dto;

import lombok.Data;

@Data
public class CartProductSlim
{
	private Long cartProductId;
	private Long cartId;
	private Integer quantity;
}
