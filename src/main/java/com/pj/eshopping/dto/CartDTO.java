package com.pj.eshopping.dto;

import com.pj.eshopping.domain.cart.CartProduct;
import com.pj.eshopping.domain.cart.CartStatus;
import com.pj.eshopping.domain.user.UserProfile;
import lombok.Data;

import java.util.List;

@Data
public class CartDTO
{
	private Long id;
	private UserProfile userProfile;
	private CartStatus cartStatus;
	private List<CartProduct> cartProducts;
}
