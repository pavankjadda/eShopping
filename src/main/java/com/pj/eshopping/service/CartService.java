package com.pj.eshopping.service;

import com.pj.eshopping.domain.cart.Cart;
import com.pj.eshopping.dto.UserProfileDTO;
import com.pj.eshopping.dto.request.CartProductRequest;

public interface CartService {
    /**
     * Finds the user cart based on user id
     *
     * @param userId User ID to find the cart
     *
     * @return Cart of the user
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    Cart getUserCart(Long userId);

    /**
     * Initialize the cart for the user
     *
     * @param profileDTO User Profile DTO
     *
     * @return initialized cart
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    Cart initializeCart(UserProfileDTO profileDTO);

    /**
     * Validates and adds the product to the cart
     *
     * @param cartDetails Request object that contains product and cart details
     *
     * @return Cart with updated products
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    Cart addProductToCart(CartProductRequest cartDetails);

    /**
     * Saves and flushes the cart
     *
     * @param cart Cart to save
     *
     * @return Cart with updated information
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    Cart save(Cart cart);

    /**
     * Updates the products in the cart
     *
     * @param request Request object that contains product and cart details
     *
     * @return Cart with updated products
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    Cart updateCartProduct(CartProductRequest request);

    /**
     * Deletes the product from the cart
     *
     * @param id ID of the product to delete
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    void deleteCartProduct(Long id);

    /**
     * Deletes the cart and all the products in it
     *
     * @param id ID of the cart to delete
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    void deleteCart(Long id);
}