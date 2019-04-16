package com.springtesting.web.api.cart;

import com.springtesting.model.cart.Cart;
import com.springtesting.repo.CartRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/cart")
public class CartController
{
    private final CartRepository cartRepository;

    public CartController(CartRepository cartRepository)
    {
        this.cartRepository = cartRepository;
    }

    @GetMapping(path = "/list")
    public List<Cart> getAllCarts()
    {
        return cartRepository.findAll();
    }

    @GetMapping(path = "/find/user/{id}")
    public Optional<Cart> getCartBasedOnUserId(@PathVariable Long id)
    {
        return cartRepository.findAllByUserProfileUserId(id);
    }
}
