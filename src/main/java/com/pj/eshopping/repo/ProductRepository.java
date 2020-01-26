package com.pj.eshopping.repo;

import com.pj.eshopping.domain.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductRepository extends JpaRepository<Product, Long>
{


}
