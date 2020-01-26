package com.pj.eshopping.repo;

import com.pj.eshopping.domain.user.AddressType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AddressTypeRepository extends JpaRepository<AddressType, Long>
{
	Optional<AddressType> findAddressTypeByType(String type);
}
