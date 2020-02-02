package com.pj.eshopping.repo;

import com.pj.eshopping.domain.user.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long>
{
}
