package com.pj.springsecurity.web.api.cart;

import com.pj.springsecurity.dto.CartDTO;
import com.pj.springsecurity.model.cart.Cart;
import com.pj.springsecurity.model.cart.CartProduct;
import com.pj.springsecurity.repo.CartRepository;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/cart")
public class CartController
{
    private final CartRepository cartRepository;
    private final ModelMapper modelMapper;

    public CartController(CartRepository cartRepository, ModelMapper modelMapper)
    {
        this.cartRepository = cartRepository;
        this.modelMapper = modelMapper;
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

    @PostMapping(path = "/product/add")
    public Cart addProductToCart(@RequestBody CartDTO cartDTO)
    {
        Cart cart=modelMapper.map(cartDTO,Cart.class);
        List<CartProduct> cartProducts=cart.getCartProducts();
        for(CartProduct cartProduct: cartProducts)
        {
            cartProduct.setCart(cart);
        }
        return cartRepository.saveAndFlush(cart);
    }

    @PutMapping(path = "/update")
    public Cart updateCart(@RequestBody CartDTO cartDTO)
    {
        Cart cart=modelMapper.map(cartDTO,Cart.class);
        return cartRepository.saveAndFlush(cart);
    }


    @DeleteMapping(path = "/product/delete")
    public void deleteProductFromCart(@RequestBody CartDTO cartDTO)
    {
        Cart cart=modelMapper.map(cartDTO,Cart.class);
        List<CartProduct> cartProducts=cart.getCartProducts();
        for(CartProduct cartProduct: cartProducts)
        {
            cartProduct.setCart(null);
        }
        cartRepository.delete(cart);
    }
}
