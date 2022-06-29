package com.pj.eshopping.service;

import com.pj.eshopping.domain.user.Address;
import com.pj.eshopping.dto.AddressDTO;

import java.util.List;
import java.util.Optional;

public interface AddressService {
    /**
     * Find all addresses
     *
     * @return List of addresses
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    List<Address> findAll();

    /**
     * Find address by id.
     *
     * @param id ID of the Address to find
     *
     * @return Address that matches given ID
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    Optional<Address> findById(Long id);

    /**
     * Create or Update Address
     *
     * @param addressDTO the address to be created or updated
     *
     * @return Created or updated Address
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    Address saveAndFlush(AddressDTO addressDTO);

    /**
     * Delete Address that matches the ID
     *
     * @param id ID of the Address record to delete
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    void deleteAddress(Long id);
}
