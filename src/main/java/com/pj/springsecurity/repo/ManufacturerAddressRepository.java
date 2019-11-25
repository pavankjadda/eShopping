package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.manufacturer.ManufacturerAddress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManufacturerAddressRepository extends JpaRepository<ManufacturerAddress, Long>
{
}
