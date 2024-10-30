package com.pj.eshopping.service;

import com.pj.eshopping.domain.user.Address;
import com.pj.eshopping.dto.request.AddressRequest;
import com.pj.eshopping.repo.AddressRepository;
import com.pj.eshopping.util.UserInfoUtil;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service class that handles business logic to get, create, update Addresses
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
@Service
@Transactional
public class AddressServiceImpl implements AddressService {
    private final AddressRepository addressRepository;
    private final UserInfoUtil userInfoUtil;
    private final ModelMapper modelMapper;

    public AddressServiceImpl(AddressRepository addressRepository, UserInfoUtil userInfoUtil, ModelMapper modelMapper) {
        this.addressRepository = addressRepository;
        this.userInfoUtil = userInfoUtil;
        this.modelMapper = modelMapper;
    }

    /**
     * Find all addresses
     *
     * @return List of addresses
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @Override
    public List<Address> findAll() {
        return addressRepository.findAll();
    }

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
    @Override
    public Optional<Address> findById(Long id) {
        return addressRepository.findById(id);
    }

    /**
     * Create or Update Address
     *
     * @param addressRequest the address to be created or updated
     *
     * @return Created or updated Address
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @Override
    public Address saveAndFlush(AddressRequest addressRequest) {
        var address = modelMapper.map(addressRequest, Address.class);
        address.setUserProfile(userInfoUtil.getCurrentUserProfile());

        return addressRepository.saveAndFlush(address);
    }

    /**
     * Delete Address that matches the ID
     *
     * @param id ID of the Address record to delete
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @Override
    public void deleteAddress(Long id) {
        addressRepository.deleteById(id);
    }
}