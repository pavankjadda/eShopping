package com.pj.eshopping.repo;

import com.pj.eshopping.domain.product.ProductPrice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductPriceRepository extends JpaRepository<ProductPrice, Long> {
}