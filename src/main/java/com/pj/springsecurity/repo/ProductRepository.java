package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductRepository extends JpaRepository<Product, Long>
{


}
