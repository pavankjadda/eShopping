package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.manufacturer.Manufacturer;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ManufacturerRepository extends JpaRepository<Manufacturer,Long>
{
    @Override
    List<Manufacturer> findAll(Sort sort);
}
