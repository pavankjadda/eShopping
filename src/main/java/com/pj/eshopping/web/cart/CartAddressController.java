package com.pj.eshopping.web.cart;

import com.pj.eshopping.domain.cart.Cart;
import com.pj.eshopping.domain.cart.CartBillingAddress;
import com.pj.eshopping.domain.cart.CartShippingAddress;
import com.pj.eshopping.repo.CartBillingAddressRepository;
import com.pj.eshopping.repo.CartRepository;
import com.pj.eshopping.repo.CartShippingAddressRepository;
import com.pj.eshopping.util.UserInfoUtil;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/cart_address")
public class CartAddressController
{
	private final CartRepository cartRepository;

	private final CartShippingAddressRepository cartShippingAddressRepository;

	private final CartBillingAddressRepository cartBillingAddressRepository;

	private final ModelMapper modelMapper;

	private final UserInfoUtil userInfoUtil;

	public CartAddressController(CartRepository cartRepository, CartShippingAddressRepository cartShippingAddressRepository, CartBillingAddressRepository cartBillingAddressRepository, ModelMapper modelMapper, UserInfoUtil userInfoUtil)
	{
		this.cartRepository = cartRepository;
		this.cartShippingAddressRepository = cartShippingAddressRepository;
		this.cartBillingAddressRepository = cartBillingAddressRepository;
		this.modelMapper = modelMapper;
		this.userInfoUtil = userInfoUtil;
	}

	@PostMapping(path = "/add/shipping_address")
	public CartShippingAddress addCartShippingAddress(@RequestBody CartShippingAddress cartShippingAddress)
	{
		Cart cart = getMyCart();
		if (cart != null)
		{
			Optional<CartShippingAddress> cartShippingAddressOptional = cartShippingAddressRepository.findByCartId(cart.getId());
			cartShippingAddressOptional.ifPresent(shippingAddress -> cartShippingAddress.setId(shippingAddress.getId()));
			cartShippingAddress.setCart(cart);
			return cartShippingAddressRepository.saveAndFlush(cartShippingAddress);
		}
		return null;
	}

	@PostMapping(path = "/add/billing_address")
	public CartBillingAddress addCartBillingAddress(@RequestBody CartBillingAddress cartBillingAddress)
	{
		Cart cart = getMyCart();
		if (cart != null)
		{
			Optional<CartBillingAddress> cartBillingAddressOptional = cartBillingAddressRepository.findByCartId(cart.getId());
			cartBillingAddressOptional.ifPresent(retrievedBillingAddress -> cartBillingAddress.setId(retrievedBillingAddress.getId()));
			cartBillingAddress.setCart(cart);
			return cartBillingAddressRepository.saveAndFlush(cartBillingAddress);
		}
		return null;
	}


	private Cart getMyCart()
	{
		Optional<Cart> cartOptional = cartRepository.findAllByUserProfileUserId(userInfoUtil.getCurrentUserProfile().getUser().getId());
		return cartOptional.orElse(null);
	}

}
