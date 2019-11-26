package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.product.ProductPrice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductPriceRepository extends JpaRepository<ProductPrice, Long>
{
	Optional<ProductPrice> findByProductIdAndPriceId(Long productId, Long priceId);
}
