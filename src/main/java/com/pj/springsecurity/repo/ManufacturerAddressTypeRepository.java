package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.manufacturer.ManufacturerAddressType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManufacturerAddressTypeRepository extends JpaRepository<ManufacturerAddressType,Long>
{
}
