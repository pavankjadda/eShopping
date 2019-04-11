package com.springtesting.web.api.user;

import com.springtesting.model.user.Address;
import com.springtesting.repo.AddressRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v2/address")
public class AddressController
{

    private AddressRepository addressRepository;

    public AddressController(AddressRepository addressRepository)
    {
        this.addressRepository = addressRepository;
    }

    @PostMapping(path = "/create")
    public void createAddress(@RequestBody Address address)
    {
        addressRepository.save(address);
    }

    @GetMapping(value = "/list")
    public List<Address> getAddresses()
    {
        return addressRepository.findAll();
    }

    @GetMapping(value = "/find/{id}")
    public Optional<Address> getAddressById(@PathVariable Long id)
    {
        return addressRepository.findById(id);
    }

}
