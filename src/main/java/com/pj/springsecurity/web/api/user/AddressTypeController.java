package com.pj.springsecurity.web.api.user;

import com.pj.springsecurity.model.user.AddressType;
import com.pj.springsecurity.repo.AddressTypeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/address_type")
public class AddressTypeController
{
    private final AddressTypeRepository addressTypeRepository;

    public AddressTypeController(AddressTypeRepository addressTypeRepository)
    {
        this.addressTypeRepository = addressTypeRepository;
    }

    @PostMapping(path = "/create")
    public void createAddressType(@RequestBody AddressType addressType)
    {
        addressTypeRepository.save(addressType);
    }

    @GetMapping(value = "/list")
    public List<AddressType> getAddressTypes()
    {
        return addressTypeRepository.findAll();
    }

    @GetMapping(value = "/find/{id}")
    public Optional<AddressType> getAddressTypeById(@PathVariable Long id)
    {
        return addressTypeRepository.findById(id);
    }

}
