package com.springtesting.repo;

import com.springtesting.model.product.Manufacturer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManufacturerRepository extends JpaRepository<Manufacturer,Long>
{

}
