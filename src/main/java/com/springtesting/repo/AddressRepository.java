package com.springtesting.repo;

import com.springtesting.model.user.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long>
{
}
