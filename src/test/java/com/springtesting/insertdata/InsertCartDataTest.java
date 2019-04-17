package com.springtesting.insertdata;

import com.springtesting.model.cart.Cart;
import com.springtesting.model.cart.CartProduct;
import com.springtesting.repo.CartRepository;
import com.springtesting.repo.CartStatusRepository;
import com.springtesting.repo.ProductRepository;
import com.springtesting.repo.UserProfileRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@DataJpaTest
@ActiveProfiles(value = "dev")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
public class InsertCartDataTest
{

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartStatusRepository cartStatusRepository;

    @Autowired
    private UserProfileRepository userProfileRepository;

    @Autowired
    private ProductRepository productRepository;

    @Test
    public void insertCart()
    {
        Cart cart=new Cart();
        cart.setUserProfile(userProfileRepository.findAllByUserId(1L).get());
        cart.setCartStatus(cartStatusRepository.findById(1L).get());
        List<CartProduct> cartProducts=new ArrayList<>();

        CartProduct cartProduct=new CartProduct();
        cartProduct.setProduct(productRepository.findById(1L).get());
        cartProduct.setQuantity(2);
        cartProducts.add(cartProduct);

        cartProduct=new CartProduct();
        cartProduct.setProduct(productRepository.findById(2L).get());
        cartProduct.setQuantity(1);
        cartProducts.add(cartProduct);

        cart.setCartProducts(cartProducts);

        cartRepository.saveAndFlush(cart);

    }

}
