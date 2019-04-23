package com.pj.springsecurity.dto;

import com.pj.springsecurity.model.cart.CartProduct;
import com.pj.springsecurity.model.cart.CartStatus;
import com.pj.springsecurity.model.user.UserProfile;
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
