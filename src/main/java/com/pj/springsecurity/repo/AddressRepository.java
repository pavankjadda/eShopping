package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.user.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long>
{
}
