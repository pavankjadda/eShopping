package com.pj.eshopping.web.address;

import com.pj.eshopping.domain.user.AddressType;
import com.pj.eshopping.dto.AddressTypeDTO;
import com.pj.eshopping.service.AddressTypeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Provides API endpoints for Address Type and related operations
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
@RestController
@RequestMapping(path = "/api/v1/address_type")
public class AddressTypeController {
    private final AddressTypeService addressTypeService;

    public AddressTypeController(AddressTypeService addressTypeService) {
        this.addressTypeService = addressTypeService;
    }

    /**
     * Find all address types.
     *
     * @return List of address types.
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @GetMapping(value = "/list")
    public List<AddressType> getAddressTypes() {
        return addressTypeService.findAll();
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
    @GetMapping(value = "/find/{id}")
    public Optional<AddressType> getAddressTypeById(@PathVariable Long id) {
        return addressTypeService.findById(id);
    }

    /**
     * Create a new address type
     *
     * @param addressTypeDTO the address type to be created
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @PostMapping(path = "/create")
    public AddressType createAddressType(@RequestBody AddressTypeDTO addressTypeDTO) {
        return addressTypeService.saveAndFlush(addressTypeDTO);
    }
}
