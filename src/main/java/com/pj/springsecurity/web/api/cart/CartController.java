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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
		UserProfile userProfile = modelMapper.map(userProfileDTO, UserProfile.class);

		Cart cart = new Cart();
		cart.setUserProfile(userProfile);
		cart.setCartStatus(cartStatusRepository.findByStatus("Draft").orElse(null));
		return cartRepository.saveAndFlush(cart);
	}

	@PostMapping(path = "/product/add")
	public Cart addProductToCart(@RequestBody CartProductDTO cartProductDTO)
	{
		CartProduct cartProduct = modelMapper.map(cartProductDTO, CartProduct.class);
		return cartProductRepository.saveAndFlush(cartProduct).getCart();
	}

	@PostMapping(path = "/product/update")
	public Cart updateCartProduct(@RequestBody CartProductDTO cartProductDTO)
	{
		CartProduct cartProduct = modelMapper.map(cartProductDTO, CartProduct.class);
		if (cartProduct.getQuantity() == 0)
		{
			deleteCartProduct(cartProduct.getId());
		}
		else
		{
			cartProductRepository.saveAndFlush(cartProduct);
		}
		return cartRepository.findById(cartProduct.getCart().getId()).orElse(null);
	}

	@DeleteMapping(path = "/product/delete/{id}")
	public void deleteCartProduct(@PathVariable Long id)
	{
		Optional<CartProduct> optionalCartProduct = cartProductRepository.findById(id);
		optionalCartProduct.ifPresent(cartProductRepository::delete);
	}


	@DeleteMapping(path = "/delete/{id}")
	public void deleteCart(@PathVariable Long id)
	{
		Optional<Cart> cartOptional = cartRepository.findById(id);
		if (cartOptional.isPresent())
		{
			Cart cart = cartOptional.get();
			for (CartProduct cartProduct : cart.getCartProducts())
			{
				cartProductRepository.delete(cartProduct);
			}
			cartRepository.delete(cart);
		}
	}
}
