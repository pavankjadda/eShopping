package com.springtesting.web.api.cart;


import com.springtesting.model.cart.CartStatus;
import com.springtesting.repo.CartStatusRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cart_status")
public class CartStatusController
{
    private final CartStatusRepository cartStatusRepository;


    public CartStatusController(CartStatusRepository cartStatusRepository)
    {
        this.cartStatusRepository = cartStatusRepository;
    }

    @GetMapping(path = "/list")
    public List<CartStatus> getAllCartStatuses()
    {
        return cartStatusRepository.findAll();
    }


}
