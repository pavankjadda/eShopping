package com.pj.eshopping.service;

import com.pj.eshopping.domain.user.AddressType;
import com.pj.eshopping.dto.AddressTypeDTO;
import com.pj.eshopping.repo.AddressTypeRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service class that handles business logic to get, create, update Address Types
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
@Service
@Transactional
public class AddressTypeServiceImpl implements AddressTypeService {
    private final AddressTypeRepository repository;

    public AddressTypeServiceImpl(AddressTypeRepository repository) {
        this.repository = repository;
    }

    /**
     * Find all address types.
     *
     * @return List of address types.
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @Override
    public List<AddressType> findAll() {
        return repository.findAll(Sort.by("type"));
    }

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
    @Override
    public Optional<AddressType> findById(Long id) {
        return repository.findById(id);
    }

    /**
     * Create a new address type
     *
     * @param addressTypeDTO the address type to be created
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @Override
    public AddressType saveAndFlush(AddressTypeDTO addressTypeDTO) {
        return repository.saveAndFlush(new AddressType(addressTypeDTO.type()));
    }
}