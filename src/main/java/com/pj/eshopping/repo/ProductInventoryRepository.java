package com.pj.eshopping.repo;

import com.pj.eshopping.model.inventory.ProductInventory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductInventoryRepository extends JpaRepository<ProductInventory, Long>
{
	Optional<ProductInventory> findByProductId(Long id);
}
