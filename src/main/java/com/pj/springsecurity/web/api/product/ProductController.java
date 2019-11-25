package com.pj.springsecurity.web.api.product;

import com.pj.springsecurity.exceptions.exceptions.GenericException;
import com.pj.springsecurity.model.inventory.ProductInventory;
import com.pj.springsecurity.model.product.Product;
import com.pj.springsecurity.repo.ProductInventoryRepository;
import com.pj.springsecurity.repo.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicReference;

@RestController
@RequestMapping("/api/v1/product")
public class ProductController
{
	private final ProductRepository productRepository;
	private final ProductInventoryRepository productInventoryRepository;

	public ProductController(ProductRepository productRepository, ProductInventoryRepository productInventoryRepository)
	{
		this.productRepository = productRepository;
		this.productInventoryRepository = productInventoryRepository;
	}

	@PostMapping(path = "/create")
	public void createProduct(@RequestBody Product product)
	{
		productRepository.saveAndFlush(product);
	}

	@PutMapping(path = "/update")
	public Product updateProduct(@RequestBody Product product)
	{
		AtomicReference<Product> savedObject = new AtomicReference<>();
		productRepository.findById(product.getId()).ifPresentOrElse(retrievedProduct ->
		{
			saveProductInventory(product, retrievedProduct, savedObject);
		}, () ->
		{
			//Throw error if
			throw new GenericException("Failed to update Product. Provided product ID is invalid ", null, HttpStatus.NOT_FOUND, LocalDateTime.now(), null, null);
		});

		return savedObject.get();
	}

	private void saveProductInventory(Product product, Product retrievedProduct, AtomicReference<Product> savedObject)
	{
		productInventoryRepository.findByProductId(retrievedProduct.getId()).ifPresentOrElse(retrievedProductInventory ->
		{
			//Update ProductInventory and Product
			retrievedProductInventory.setQuantity(product.getProductInventory().getQuantity());
			retrievedProduct.setProductInventory(productInventoryRepository.saveAndFlush(retrievedProductInventory));
			savedObject.set(productRepository.saveAndFlush(retrievedProduct));
		}, () ->
		{
			//Create new ProductInventory if it does not exist
			ProductInventory productInventory = new ProductInventory();
			productInventory.setQuantity(product.getProductInventory().getQuantity());
			productInventory.setProduct(retrievedProduct);
			retrievedProduct.setProductInventory(productInventoryRepository.saveAndFlush(productInventory));
			savedObject.set(productRepository.saveAndFlush(product));
		});
	}

	@GetMapping(value = "/list")
	public List<Product> getProducts()
	{
		return productRepository.findAll();
	}

	@GetMapping(value = "/find/{id}")
	public Optional<Product> getProductById(@PathVariable Long id)
	{
		return productRepository.findById(id);
	}
}
