package com.pj.eshopping.service;

import com.pj.eshopping.domain.user.AddressType;
import com.pj.eshopping.dto.AddressTypeDTO;

import java.util.List;
import java.util.Optional;

public interface AddressTypeService {

    /**
     * Find all address types.
     *
     * @return List of address types.
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    List<AddressType> findAll();


    /**
     * Find address type by id.
     *
     * @param id Address type id to find.
     *
     * @return Address type by id.
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    Optional<AddressType> findById(Long id);

    /**
     * Create a new address type
     *
     * @param addressTypeDTO the address type to be created
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    AddressType saveAndFlush(AddressTypeDTO addressTypeDTO);
}
