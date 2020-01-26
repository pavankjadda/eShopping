package com.pj.eshopping.repo;

import com.pj.eshopping.domain.manufacturer.Manufacturer;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ManufacturerRepository extends JpaRepository<Manufacturer, Long>
{
	@Override
	List<Manufacturer> findAll(Sort sort);
}
