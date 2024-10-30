package com.pj.eshopping.web.cart;

import com.pj.eshopping.domain.cart.Cart;
import com.pj.eshopping.dto.UserProfileDTO;
import com.pj.eshopping.dto.request.CartProductRequest;
import com.pj.eshopping.service.CartService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/cart")
public class CartController {
    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

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
    @GetMapping(path = "/find/user/{userId}")
    public Cart getCartBasedOnUserId(@PathVariable Long userId) {
        return cartService.getUserCart(userId);
    }

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
    @PostMapping(path = "/initialize")
    public Cart initializeCart(@RequestBody UserProfileDTO profileDTO) {
        return cartService.initializeCart(profileDTO);
    }

    /**
     * Validates and adds the product to the cart
     *
     * @param request Request object that contains product and cart details
     *
     * @return Cart with updated products
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @PostMapping(path = "/product/add")
    public Cart addProductToCart(@RequestBody CartProductRequest request) {
        return cartService.addProductToCart(request);
    }

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
    @PostMapping(path = "/product/update")
    public Cart updateCartProduct(@RequestBody CartProductRequest request) {
        return cartService.updateCartProduct(request);
    }

    /**
     * Deletes the product from the cart
     *
     * @param id ID of the product to delete
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @DeleteMapping(path = "/product/delete/{id}")
    public void deleteCartProduct(@PathVariable Long id) {
        cartService.deleteCartProduct(id);
    }

    /**
     * Deletes the cart and all the products in it
     *
     * @param id ID of the cart to delete
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @DeleteMapping(path = "/delete/{id}")
    public void deleteCart(@PathVariable Long id) {
        cartService.deleteCart(id);
    }
}