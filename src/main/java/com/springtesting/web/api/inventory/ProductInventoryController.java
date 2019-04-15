package com.springtesting.web.api.inventory;

import com.springtesting.model.inventory.ProductInventory;
import com.springtesting.repo.ProductInventoryRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/inventory")
public class ProductInventoryController
{
    private final ProductInventoryRepository productInventoryRepository;

    public ProductInventoryController(ProductInventoryRepository productInventoryRepository)
    {
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
        return productInventoryRepository.findAllByProductId(id);
    }
}
