package com.pj.eshopping.service;

import com.pj.eshopping.domain.cart.Cart;
import com.pj.eshopping.domain.cart.CartProduct;
import com.pj.eshopping.domain.inventory.ProductInventory;
import com.pj.eshopping.domain.order.Order;
import com.pj.eshopping.domain.order.OrderBillingAddress;
import com.pj.eshopping.domain.order.OrderProductDetail;
import com.pj.eshopping.domain.order.OrderShippingAddress;
import com.pj.eshopping.domain.tax.TaxRate;
import com.pj.eshopping.exceptions.exceptions.GenericException;
import com.pj.eshopping.repo.CartRepository;
import com.pj.eshopping.repo.OrderBillingAddressRepository;
import com.pj.eshopping.repo.OrderProductDetailRepository;
import com.pj.eshopping.repo.OrderRepository;
import com.pj.eshopping.repo.OrderShippingAddressRepository;
import com.pj.eshopping.repo.OrderStatusRepository;
import com.pj.eshopping.repo.ProductInventoryRepository;
import com.pj.eshopping.repo.TaxRateRepository;
import com.pj.eshopping.util.UserInfoUtil;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService
{

	private final OrderRepository orderRepository;
	private final OrderStatusRepository orderStatusRepository;
	private final OrderProductDetailRepository orderProductDetailRepository;
	private final OrderBillingAddressRepository orderBillingAddressRepository;
	private final OrderShippingAddressRepository orderShippingAddressRepository;
	private final UserInfoUtil userInfoUtil;
	private final CartRepository cartRepository;
	private final TaxRateRepository taxRateRepository;
	private final ProductInventoryRepository productInventoryRepository;
	private final ModelMapper modelMapper;
	private Logger logger = LoggerFactory.getLogger(OrderService.class);


	public OrderService(OrderRepository orderRepository, OrderStatusRepository orderStatusRepository, OrderProductDetailRepository orderProductDetailRepository, OrderBillingAddressRepository orderBillingAddressRepository, OrderShippingAddressRepository orderShippingAddressRepository, UserInfoUtil userInfoUtil, CartRepository cartRepository, TaxRateRepository taxRateRepository, ProductInventoryRepository productInventoryRepository, ModelMapper modelMapper)
	{
		this.orderRepository = orderRepository;
		this.orderStatusRepository = orderStatusRepository;
		this.orderProductDetailRepository = orderProductDetailRepository;
		this.orderBillingAddressRepository = orderBillingAddressRepository;
		this.orderShippingAddressRepository = orderShippingAddressRepository;
		this.userInfoUtil = userInfoUtil;
		this.cartRepository = cartRepository;
		this.taxRateRepository = taxRateRepository;
		this.productInventoryRepository = productInventoryRepository;
		this.modelMapper = modelMapper;
	}


	public Order createOrder()
	{
		Cart cart = getMyCart();
		Order order = null;
		try
		{
			if (cart != null)
			{
				order = new Order();
				order.setPurchasedBy(userInfoUtil.getCurrentUserProfile());
				Double totalCostBeforeTax = calculateTotalCostBeforeTax(cart);
				Double taxAmount = totalCostBeforeTax * getTaxRate(cart);

				order.setTax(taxAmount);
				order.setTotalCost(totalCostBeforeTax + taxAmount);
				order.setOrderStatus(orderStatusRepository.findByStatus("Created"));
				order.setShippingCharge((double) 0);
				order.setOrderCreatedDateTime(LocalDateTime.now());
				order = orderRepository.saveAndFlush(order);

				OrderShippingAddress orderShippingAddress = modelMapper.map(cart.getCartShippingAddress(), OrderShippingAddress.class);
				orderShippingAddress=orderShippingAddressRepository.saveAndFlush(orderShippingAddress);
				OrderBillingAddress orderBillingAddress = modelMapper.map(cart.getCartBillingAddress(), OrderBillingAddress.class);
				orderBillingAddress=orderBillingAddressRepository.saveAndFlush(orderBillingAddress);

				order.setOrderShippingAddress(orderShippingAddress);
				order.setOrderBillingAddress(orderBillingAddress);
				order.setOrderProductDetails(copyCartProducts(cart,order));
				order = orderRepository.saveAndFlush(order);

				orderBillingAddress.setOrder(order);
				orderBillingAddressRepository.saveAndFlush(orderBillingAddress);
				orderShippingAddress.setOrder(order);
				orderShippingAddressRepository.saveAndFlush(orderShippingAddress);
				cartRepository.delete(cart);

				return order;
			}
		}
		catch (Exception e)
		{
			logger.error("Exception occurred while creating the order. Rolling back the changes");
			if (order != null)
			{
				rollBackOrderChanges(order);
			}
		}
		return order;
	}


	private Double getTaxRate(Cart cart)
	{
		return taxRateRepository.findByStateId(cart.getCartShippingAddress()
				.getState().getId()).map(TaxRate::getRate).orElse(null);
	}

	public List<Order> getOrder()
	{
		return orderRepository.findAll();
	}

	public Optional<Order> getOrderById(Long id)
	{
		return orderRepository.findById(id);
	}

	public Order updateOrder(Order order)
	{
		return orderRepository.saveAndFlush(order);
	}


	private void rollBackOrderChanges(Order order)
	{
		if (order.getOrderProductDetails() != null)
		{
			order.getOrderProductDetails().forEach(orderProductDetailRepository::delete);
		}
	}

	/*
		Copy cart products to Order
	*/
	private List<OrderProductDetail> copyCartProducts(Cart cart, Order order)
	{
		List<OrderProductDetail> orderProductDetailList = new ArrayList<>();
		List<CartProduct> cartProductList = cart.getCartProducts();
		for (CartProduct cartProduct : cartProductList)
		{
			OrderProductDetail orderProductDetail = new OrderProductDetail();
			orderProductDetail.setProduct(cartProduct.getProduct());
			orderProductDetail.setQuantity(cartProduct.getQuantity());
			orderProductDetail.setOriginalPrice(cartProduct.getProduct().getPrice().getAmount());
			orderProductDetail.setOrder(order);

			reserveQuantity(cartProduct);
			orderProductDetail = orderProductDetailRepository.saveAndFlush(orderProductDetail);
			orderProductDetailList.add(orderProductDetail);
		}
		return orderProductDetailList;
	}

	private void reserveQuantity(CartProduct cartProduct)
	{
		Optional<ProductInventory> productInventoryOptional = productInventoryRepository.findByProductId(cartProduct.getProduct().getId());
		if (productInventoryOptional.isPresent())
		{
			ProductInventory productInventory = productInventoryOptional.get();
			if (productInventory.getQuantity() >= cartProduct.getQuantity())
			{
				productInventory.setQuantity(productInventory.getQuantity() - cartProduct.getQuantity());
			}
			else
				throw new GenericException("Requested product quantity of " + cartProduct.getProduct().getName() + " is not available. Failed to create the order",
						null, HttpStatus.NOT_ACCEPTABLE, LocalDateTime.now(), null, null);
		}
		else
			throw new GenericException("Requested product quantity of " + cartProduct.getProduct().getName() + " is not available. Failed to create the order",
					null, HttpStatus.BAD_REQUEST, LocalDateTime.now(), null, null);
	}

	private Double calculateTotalCostBeforeTax(Cart cart)
	{
		List<CartProduct> cartProductList = cart.getCartProducts();
		double totalCostBeforeTax = 0.00;
		for (CartProduct cartProduct : cartProductList)
		{
			totalCostBeforeTax += cartProduct.getQuantity() * cartProduct.getProduct().getPrice().getAmount();
		}
		return totalCostBeforeTax;
	}

	private Cart getMyCart()
	{
		return cartRepository.findAllByUserProfileUserId(userInfoUtil.getCurrentUserProfile().getUser().getId()).orElse(null);
	}

	public void deleteOrder(Long id)
	{
		orderRepository.deleteById(id);
	}
}
