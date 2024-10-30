package com.pj.eshopping.web.address;

import com.pj.eshopping.domain.user.Address;
import com.pj.eshopping.dto.request.AddressRequest;
import com.pj.eshopping.service.AddressService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Provides API endpoints for Address and related operations
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
@RestController
@RequestMapping(path = "/api/v1/address")
public class AddressController {
    private final AddressService addressService;

    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    /**
     * Find all addresses
     *
     * @return List of addresses
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @GetMapping(value = "/list")
    public List<Address> getAddresses() {
        return addressService.findAll();
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
    @GetMapping(value = "/find/{id}")
    public Optional<Address> getAddressById(@PathVariable Long id) {
        return addressService.findById(id);
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
    @PostMapping(path = {"/create", "/update"})
    public Address createAddress(@RequestBody AddressRequest addressRequest) {
        return addressService.saveAndFlush(addressRequest);
    }

    /**
     * Delete Address that matches the ID
     *
     * @param id ID of the Address record to delete
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @DeleteMapping(path = "/delete/{id}")
    public void deleteAddress(@PathVariable Long id) {
        addressService.deleteAddress(id);
    }
}