package com.springtesting.web.order;

import com.springtesting.model.Product;
import com.springtesting.repo.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController
{
    private ProductRepository productRepository;

    public ProductController(ProductRepository productRepository)
    {
        this.productRepository = productRepository;
    }

    @PostMapping(path = "/create")
    public void createProduct(@RequestBody Product Product)
    {
        productRepository.saveAndFlush(Product);
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
