package com.pj.springsecurity.web.api.cart;

import com.pj.springsecurity.model.cart.Cart;
import com.pj.springsecurity.model.cart.CartProduct;
import com.pj.springsecurity.repo.CartProductRepository;
import com.pj.springsecurity.repo.CartRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/cart")
public class CartController
{
    private final CartRepository cartRepository;

    private final CartProductRepository cartProductRepository;

    public CartController(CartRepository cartRepository, CartProductRepository cartProductRepository)
    {
        this.cartRepository = cartRepository;
        this.cartProductRepository=cartProductRepository;
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
    public Cart addProductToCart(@RequestBody Cart cart)
    {
        Cart savedCart=cartRepository.saveAndFlush(cart);
        updateCartProductWithNewCartId(savedCart);
        return savedCart;
    }

    /*
       Update CartProducts with Cart Id
     */
    private void updateCartProductWithNewCartId(Cart savedCart)
    {
        List<CartProduct> cartProducts=savedCart.getCartProducts();
        for(CartProduct cartProduct: cartProducts)
        {
            if(cartProduct.getCart() == null)
            {
                cartProduct.setCart(savedCart);
                cartProductRepository.saveAndFlush(cartProduct);
            }
        }
    }


    @PostMapping(path = "/create/empty")
    public Cart createEmptyCart(@RequestBody Cart cart)
    {
        return cartRepository.saveAndFlush(cart);
    }
}
