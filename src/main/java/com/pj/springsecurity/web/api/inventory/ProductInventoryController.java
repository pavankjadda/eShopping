package com.pj.springsecurity.web.api.inventory;

import com.pj.springsecurity.model.inventory.ProductInventory;
import com.pj.springsecurity.repo.ProductInventoryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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

    @PostMapping(path = "/product/ids")
    public List<ProductInventory> getProductInventoryByProductIds(@RequestBody List<Long> productIdList)
    {
        List<ProductInventory> productInventories=new ArrayList<>();
        for (Long id :productIdList)
        {
            Optional<ProductInventory> productInventoryOptional=productInventoryRepository.findAllByProductId(id);
            productInventoryOptional.ifPresent(productInventories::add);
        }
        return productInventories;
    }
}
