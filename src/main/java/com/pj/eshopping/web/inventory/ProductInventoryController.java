package com.pj.eshopping.web.inventory;

import com.pj.eshopping.domain.inventory.ProductInventory;
import com.pj.eshopping.domain.product.Product;
import com.pj.eshopping.exceptions.exceptions.GenericException;
import com.pj.eshopping.repo.ProductInventoryRepository;
import com.pj.eshopping.repo.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/inventory")
public class ProductInventoryController
{
	private final ProductRepository productRepository;
	private final ProductInventoryRepository productInventoryRepository;

	public ProductInventoryController(ProductRepository productRepository, ProductInventoryRepository productInventoryRepository)
	{
		this.productRepository = productRepository;
		this.productInventoryRepository = productInventoryRepository;
	}

	@GetMapping(path = "/list")
	public List<ProductInventory> getAllProductInventory()
	{
		return productInventoryRepository.findAll();
	}

	@GetMapping(path = "/product/{id}")
	public Optional<ProductInventory> getProductInventoryByProductId(@PathVariable Long id)
	{
		return productInventoryRepository.findByProductId(id);
	}

	@PostMapping(path = "/update")
	public ProductInventory updateProductInventory(@RequestParam(name = "product_id") Long productId, @RequestParam Long quantity)
	{
		Optional<Product> productOptional = productRepository.findById(productId);
		if (productOptional.isPresent())
		{
			ProductInventory productInventory = new ProductInventory();
			productInventory.setProduct(productOptional.get());
			productInventory.setQuantity(quantity);
			return productInventoryRepository.saveAndFlush(productInventory);
		}
		else
		{
			throw new GenericException("Failed to update Product Inventory. Provided product ID is invalid ", null, HttpStatus.NOT_FOUND, LocalDateTime.now(), null, null);
		}
	}

	@PostMapping(path = "/product/ids")
	public List<ProductInventory> getProductInventoryByProductIds(@RequestBody List<Long> productIdList)
	{
		List<ProductInventory> productInventories = new ArrayList<>();
		for (Long id : productIdList)
		{
			Optional<ProductInventory> productInventoryOptional = productInventoryRepository.findByProductId(id);
			productInventoryOptional.ifPresent(productInventories::add);
		}
		return productInventories;
	}
}
