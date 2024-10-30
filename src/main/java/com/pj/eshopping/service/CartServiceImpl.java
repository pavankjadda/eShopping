package com.pj.eshopping.service;

import com.pj.eshopping.domain.cart.Cart;
import com.pj.eshopping.domain.cart.CartProduct;
import com.pj.eshopping.domain.user.UserProfile;
import com.pj.eshopping.dto.UserProfileDTO;
import com.pj.eshopping.dto.request.CartProductRequest;
import com.pj.eshopping.exceptions.exceptions.GenericException;
import com.pj.eshopping.repo.CartProductRepository;
import com.pj.eshopping.repo.CartRepository;
import com.pj.eshopping.repo.CartStatusRepository;
import com.pj.eshopping.repo.ProductRepository;
import com.pj.eshopping.util.UserInfoUtil;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@Transactional
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepository;
    private final CartStatusRepository statusRepository;
    private final CartStatusRepository cartStatusRepository;
    private final CartProductRepository cartProductRepository;
    private final ProductRepository productRepository;
    private final UserInfoUtil userInfoUtil;
    private final ModelMapper mapper;

    public CartServiceImpl(CartRepository cartRepository, CartStatusRepository statusRepository, CartStatusRepository cartStatusRepository,
                           CartProductRepository cartProductRepository,
                           ProductRepository productRepository, UserInfoUtil userInfoUtil, ModelMapper mapper) {
        this.cartRepository = cartRepository;
        this.statusRepository = statusRepository;
        this.cartStatusRepository = cartStatusRepository;
        this.cartProductRepository = cartProductRepository;
        this.productRepository = productRepository;
        this.userInfoUtil = userInfoUtil;
        this.mapper = mapper;
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
    @Override
    @Transactional(readOnly = true)
    public Cart getUserCart(Long userId) {
        return cartRepository.findAllByUserProfileUserId(userId).orElse(null);
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
    @Override
    public Cart initializeCart(UserProfileDTO profileDTO) {
        var userProfile = mapper.map(profileDTO, UserProfile.class);
        var cart = new Cart();
        cart.setUserProfile(userProfile);
        cart.setCartStatus(statusRepository.findByStatus("Draft").orElse(null));
        return save(cart);
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
    @Override
    public Cart addProductToCart(CartProductRequest request) {
        if (request.cartProductId() != null) {
            var cartProductOptional = cartProductRepository.findById(request.cartProductId());
            if (cartProductOptional.isPresent()) {
                var cartProduct = cartProductOptional.get();
                cartProduct.setQuantity(request.quantity());
                cartProductRepository.saveAndFlush(cartProduct);
                return cartRepository.findById(cartProduct.getCart().getId()).orElse(null);
            }
        }
        return createCartProductAndSaveIt(request);
    }

    @Override
    public Cart save(Cart cart) {
        return cartRepository.saveAndFlush(cart);
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
    @Override
    public Cart updateCartProduct(CartProductRequest request) {
        var cartProductOptional = cartProductRepository.findById(request.cartProductId());
        if (cartProductOptional.isPresent()) {
            var cartProduct = cartProductOptional.get();
            if (request.quantity() == 0) {
                deleteCartProduct(cartProduct.getId());
            } else {
                cartProduct.setQuantity(request.quantity());
                cartProductRepository.saveAndFlush(cartProduct);
            }
            return cartRepository.findById(cartProduct.getCart().getId()).orElse(null);
        } else
            throw new GenericException("Failed to update Cart. Provided product ID is invalid ", null, HttpStatus.NOT_FOUND, LocalDateTime.now(), null, null);
    }

    /**
     * Deletes the product from the cart
     *
     * @param id ID of the product to delete
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @Override
    public void deleteCartProduct(Long id) {
        cartProductRepository.deleteById(id);
    }

    /**
     * Deletes the cart and all the products in it
     *
     * @param id ID of the cart to delete
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @Override
    public void deleteCart(Long id) {
        var cartOptional = cartRepository.findById(id);
        if (cartOptional.isPresent()) {
            Cart cart = cartOptional.get();
            cartProductRepository.deleteAll(cart.getCartProducts());
            cartRepository.delete(cart);
        }
    }

    private Cart createCartProductAndSaveIt(CartProductRequest cartProductRequest) {
        var cartProduct = new CartProduct();
        cartProduct.setQuantity(cartProductRequest.quantity());
        if (cartProductRequest.productId() == null) {
            throw new GenericException("Failed to add product to Cart. Provided product ID is invalid ", null, HttpStatus.NOT_FOUND, LocalDateTime.now(), null,
                    null);
        }

        //Check if provided product id is valid
        var productOptional = productRepository.findById(cartProductRequest.productId());
        if (productOptional.isPresent()) {
            cartProduct.setProduct(productOptional.get());
        } else {
            throw new GenericException("Failed to add product to Cart. Provided product ID is invalid ", null, HttpStatus.NOT_FOUND, LocalDateTime.now(), null,
                    null);
        }

        // Get User Cart
        var cartOptional = cartRepository.findAllByUserProfileUserId(userInfoUtil.getCurrentUserProfile().getUser().getId());
        if (cartOptional.isPresent()) {
            cartProduct.setCart(cartOptional.get());
        } else {
            //If Cart does not exist, initialize the cart
            Cart cart = new Cart();
            cart.setUserProfile(userInfoUtil.getCurrentUserProfile());
            cart.setCartStatus(cartStatusRepository.findByStatus("Draft").orElse(null));
            cartProduct.setCart(cartRepository.saveAndFlush(cart));
        }
        cartProductRepository.saveAndFlush(cartProduct);
        return cartRepository.findAllByUserProfileUserId(userInfoUtil.getCurrentUserProfile().getUser().getId()).orElse(null);
    }
}