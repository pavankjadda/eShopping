package com.pj.eshopping.web.product;

import com.pj.eshopping.domain.inventory.ProductInventory;
import com.pj.eshopping.domain.product.Product;
import com.pj.eshopping.exceptions.exceptions.GenericException;
import com.pj.eshopping.repo.ProductInventoryRepository;
import com.pj.eshopping.repo.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicReference;

@RestController
@RequestMapping("/api/v1/product")
public class ProductController {
    private final ProductRepository repository;
    private final ProductInventoryRepository inventoryRepository;

    public ProductController(ProductRepository repository, ProductInventoryRepository inventoryRepository) {
        this.repository = repository;
        this.inventoryRepository = inventoryRepository;
    }

    @PostMapping(path = "/create")
    public void createProduct(@RequestBody Product product) {
        //Save ProductInventory object
        ProductInventory productInventory = product.getProductInventory();
        productInventory = inventoryRepository.saveAndFlush(productInventory);

        //Assign ProductInventory object to Product
        product.setProductInventory(productInventory);
        product = repository.saveAndFlush(product);

        //Update ProductInventory with new Product object to update product Id
        productInventory.setProduct(product);
        inventoryRepository.saveAndFlush(productInventory);
    }

    @PutMapping(path = "/update")
    public Product updateProduct(@RequestBody Product product) {
        AtomicReference<Product> savedObject = new AtomicReference<>();
        repository.findById(product.getId()).ifPresentOrElse(retrievedProduct -> saveProductInventory(product, retrievedProduct, savedObject), () -> {
            //Throw error if product ID is invalid
            throw new GenericException("Failed to update Product. Provided product ID is invalid ", null, HttpStatus.NOT_FOUND, LocalDateTime.now(), null,
                    null);
        });

        return savedObject.get();
    }

    private void saveProductInventory(Product product, Product retrievedProduct, AtomicReference<Product> savedObject) {
        inventoryRepository.findByProductId(retrievedProduct.getId()).ifPresentOrElse(retrievedProductInventory -> {
            //Update ProductInventory and Product
            retrievedProductInventory.setQuantity(product.getProductInventory().getQuantity());
            inventoryRepository.saveAndFlush(retrievedProductInventory);
            savedObject.set(repository.saveAndFlush(retrievedProduct));
        }, () -> {
            //Create new ProductInventory if it does not exist
            ProductInventory productInventory = new ProductInventory();
            productInventory.setQuantity(product.getProductInventory().getQuantity());
            productInventory.setProduct(retrievedProduct);
            retrievedProduct.setProductInventory(inventoryRepository.saveAndFlush(productInventory));
            savedObject.set(repository.saveAndFlush(product));
        });
    }

    @GetMapping(value = "/list")
    public List<Product> getProducts() {
        return repository.findAll();
    }

    @GetMapping(value = "/find/{id}")
    public Optional<Product> getProductById(@PathVariable Long id) {
        return repository.findById(id);
    }
}