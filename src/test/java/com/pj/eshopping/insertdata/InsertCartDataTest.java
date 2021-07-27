package com.pj.eshopping.insertdata;

import com.pj.eshopping.domain.cart.Cart;
import com.pj.eshopping.domain.cart.CartProduct;
import com.pj.eshopping.repo.CartProductRepository;
import com.pj.eshopping.repo.CartRepository;
import com.pj.eshopping.repo.CartStatusRepository;
import com.pj.eshopping.repo.ProductRepository;
import com.pj.eshopping.repo.UserProfileRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.ArrayList;
import java.util.List;

@ExtendWith(SpringExtension.class)
@DataJpaTest
@ActiveProfiles(value = "dev")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
class InsertCartDataTest
{

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartProductRepository cartProductRepository;

    @Autowired
    private CartStatusRepository cartStatusRepository;

    @Autowired
    private UserProfileRepository userProfileRepository;

    @Autowired
    private ProductRepository productRepository;


    @BeforeEach
    public void setUp()
    {
        cartProductRepository.deleteAll();
        cartRepository.deleteAll();
    }
    @Test
    void insertCart()
    {
        Cart cart=new Cart();
        cart.setUserProfile(userProfileRepository.findAllByUserId(1L).get());
        cart.setCartStatus(cartStatusRepository.findById(1L).get());
        List<CartProduct> cartProducts=new ArrayList<>();

        CartProduct cartProduct=new CartProduct();
        cartProduct.setProduct(productRepository.findById(1L).get());
        cartProduct.setQuantity(2);
        cartProduct.setCart(cart);
        cartProducts.add(cartProduct);

        cartProduct=new CartProduct();
        cartProduct.setProduct(productRepository.findById(2L).get());
        cartProduct.setQuantity(1);
        cartProduct.setCart(cart);
        cartProducts.add(cartProduct);

        cart.setCartProducts(cartProducts);

        cartRepository.saveAndFlush(cart);
    }
}
