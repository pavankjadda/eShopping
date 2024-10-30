package com.pj.eshopping.repo;

import com.pj.eshopping.domain.manufacturer.Manufacturer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManufacturerRepository extends JpaRepository<Manufacturer, Long> {
}