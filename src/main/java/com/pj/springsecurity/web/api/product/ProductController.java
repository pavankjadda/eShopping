package com.pj.springsecurity.web.api.product;

import com.pj.springsecurity.model.product.Product;
import com.pj.springsecurity.repo.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/product")
public class ProductController
{
    private ProductRepository productRepository;

    public ProductController(ProductRepository productRepository)
    {
        this.productRepository = productRepository;
    }

    @PostMapping(path = "/create")
    public void createProduct(@RequestBody Product product)
    {
        productRepository.saveAndFlush(product);
    }

    @PutMapping(path = "/update")
    public void updateProduct(@RequestBody Product product)
    {
        productRepository.saveAndFlush(product);
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
