package com.springtesting.repo;

import com.springtesting.model.inventory.ProductInventory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductInventoryRepository extends JpaRepository<ProductInventory,Long>
{
    Optional<ProductInventory> findAllByProductId(Long id);
}
