package com.pj.eshopping.web.cart;

import com.pj.eshopping.domain.cart.Cart;
import com.pj.eshopping.domain.cart.CartProduct;
import com.pj.eshopping.domain.product.Product;
import com.pj.eshopping.domain.user.UserProfile;
import com.pj.eshopping.dto.CartProductJson;
import com.pj.eshopping.dto.UserProfileDTO;
import com.pj.eshopping.exceptions.exceptions.GenericException;
import com.pj.eshopping.repo.CartProductRepository;
import com.pj.eshopping.repo.CartRepository;
import com.pj.eshopping.repo.CartStatusRepository;
import com.pj.eshopping.repo.ProductRepository;
import com.pj.eshopping.util.UserInfoUtil;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/cart")
public class CartController
{
	private final CartRepository cartRepository;
	private final CartProductRepository cartProductRepository;
	private final CartStatusRepository cartStatusRepository;
	private final ProductRepository productRepository;
	private final UserInfoUtil userInfoUtil;

	private final ModelMapper modelMapper;

	public CartController(CartRepository cartRepository, ModelMapper modelMapper, CartProductRepository cartProductRepository, CartStatusRepository cartStatusRepository, ProductRepository productRepository, UserInfoUtil userInfoUtil)
	{
		this.cartRepository = cartRepository;
		this.modelMapper = modelMapper;
		this.cartProductRepository = cartProductRepository;
		this.cartStatusRepository = cartStatusRepository;
		this.productRepository = productRepository;
		this.userInfoUtil = userInfoUtil;
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
	public Cart addProductToCart(@RequestBody CartProductJson cartProductJson)
	{
		if (cartProductJson.getCartProductId() != null)
		{
			Optional<CartProduct> cartProductOptional = cartProductRepository.findById(cartProductJson.getCartProductId());
			if (cartProductOptional.isPresent())
			{
				CartProduct cartProduct = cartProductOptional.get();
				cartProduct.setQuantity(cartProductJson.getQuantity());
				cartProductRepository.saveAndFlush(cartProduct);
				return cartRepository.findById(cartProduct.getCart().getId()).orElse(null);
			}
		}
		return createCartProductAndSaveIt(cartProductJson);
	}

	private Cart createCartProductAndSaveIt(CartProductJson cartProductJson)
	{
		CartProduct cartProduct = new CartProduct();
		cartProduct.setQuantity(cartProductJson.getQuantity());
		if (cartProductJson.getProductId() == null)
		{
			throw new GenericException("Failed to add product to Cart. Provided product ID is invalid ", null, HttpStatus.NOT_FOUND, LocalDateTime.now(), null, null);
		}

		//Check if provided product id is valid
		Optional<Product> productOptional = productRepository.findById(cartProductJson.getProductId());
		if (productOptional.isPresent())
		{
			cartProduct.setProduct(productOptional.get());
		}
		else
		{
			throw new GenericException("Failed to add product to Cart. Provided product ID is invalid ", null, HttpStatus.NOT_FOUND, LocalDateTime.now(), null, null);
		}

		// Get User Cart
		Optional<Cart> cartOptional = cartRepository.findAllByUserProfileUserId(userInfoUtil.getCurrentUserProfile().getUser().getId());
		if(cartOptional.isPresent())
		{
			cartProduct.setCart(cartOptional.get());
		}
		else
		{
			//If Cart does not exist, initialize the cart
			Cart cart = new Cart();
			cart.setUserProfile(userInfoUtil.getCurrentUserProfile());
			cart.setCartStatus(cartStatusRepository.findByStatus("Draft").orElse(null));
			cartProduct.setCart(cartRepository.saveAndFlush(cart));
		}
		cartProductRepository.saveAndFlush(cartProduct);
		return cartRepository.findAllByUserProfileUserId(userInfoUtil.getCurrentUserProfile().getUser().getId()).orElse(null);
	}

	@PostMapping(path = "/product/update")
	public Cart updateCartProduct(@RequestBody CartProductJson cartProductJson)
	{
		Optional<CartProduct> cartProductOptional = cartProductRepository.findById(cartProductJson.getCartProductId());
		if (cartProductOptional.isPresent())
		{
			CartProduct cartProduct = cartProductOptional.get();
			if (cartProductJson.getQuantity() == 0)
			{
				deleteCartProduct(cartProduct.getId());
			}
			else
			{
				cartProduct.setQuantity(cartProductJson.getQuantity());
				cartProductRepository.saveAndFlush(cartProduct);
			}
			return cartRepository.findById(cartProduct.getCart().getId()).orElse(null);
		}
		else
			throw new GenericException("Failed to update Cart. Provided product ID is invalid ", null, HttpStatus.NOT_FOUND, LocalDateTime.now(), null, null);
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
