package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.product.Manufacturer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManufacturerRepository extends JpaRepository<Manufacturer,Long>
{

}
