package com.pj.eshopping.dto;

import lombok.Data;

@Data
public class CartProductJson
{
		private Long cartProductId;
		private Long cartId;
		private Long productId;
		private Integer quantity;
}
