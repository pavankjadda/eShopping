package com.pj.springsecurity.web.api.cart;

import com.pj.springsecurity.dto.CartProductDTO;
import com.pj.springsecurity.dto.UserProfileDTO;
import com.pj.springsecurity.model.cart.Cart;
import com.pj.springsecurity.model.cart.CartProduct;
import com.pj.springsecurity.model.user.UserProfile;
import com.pj.springsecurity.repo.CartProductRepository;
import com.pj.springsecurity.repo.CartRepository;
import com.pj.springsecurity.repo.CartStatusRepository;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/cart")
public class CartController
{
    private final CartRepository cartRepository;
    private final CartProductRepository cartProductRepository;
    private final CartStatusRepository cartStatusRepository;

    private final ModelMapper modelMapper;

    public CartController(CartRepository cartRepository, ModelMapper modelMapper, CartProductRepository cartProductRepository, CartStatusRepository cartStatusRepository)
    {
        this.cartRepository = cartRepository;
        this.modelMapper = modelMapper;
        this.cartProductRepository = cartProductRepository;
        this.cartStatusRepository = cartStatusRepository;
    }

    @GetMapping(path = "/find/user/{id}")
    public Optional<Cart> getCartBasedOnUserId(@PathVariable Long id)
    {
        return cartRepository.findAllByUserProfileUserId(id);
    }

    @PostMapping(path = "/initialize")
    public Cart initializeCart(@RequestBody UserProfileDTO userProfileDTO)
    {
        UserProfile userProfile=modelMapper.map(userProfileDTO,UserProfile.class);

        Cart cart=new Cart();
        cart.setUserProfile(userProfile);
        cart.setCartStatus(cartStatusRepository.findByStatus("Draft").orElse(null));
        return cartRepository.saveAndFlush(cart);
    }

    @PostMapping(path = "/product/add")
    public Cart addProductToCart(@RequestBody CartProductDTO cartProductDTO)
    {
        CartProduct cartProduct=modelMapper.map(cartProductDTO,CartProduct.class);
        return cartProductRepository.saveAndFlush(cartProduct).getCart();
    }

    @PostMapping(path = "/product/update")
    public Cart updateCartProduct(@RequestBody CartProductDTO cartProductDTO)
    {
        CartProduct cartProduct=modelMapper.map(cartProductDTO,CartProduct.class);
        if(cartProduct.getQuantity() == 0)
        {
            cartProductRepository.delete(cartProduct);
        }
        else
        {
            cartProductRepository.saveAndFlush(cartProduct);
        }
        return cartRepository.findById(cartProduct.getCart().getId()).orElse(null);
    }


    @DeleteMapping(path = "/delete")
    public void deleteCart(@PathVariable Long cartId)
    {
        cartRepository.deleteById(cartId);
    }
}
