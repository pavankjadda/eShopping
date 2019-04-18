package com.pj.springsecurity.web.api.user;

import com.pj.springsecurity.model.user.Address;
import com.pj.springsecurity.repo.AddressRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/address")
public class AddressController
{

    private AddressRepository addressRepository;

    public AddressController(AddressRepository addressRepository)
    {
        this.addressRepository = addressRepository;
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
    @PostMapping(path = "/create")
    public Address createAddress(@RequestBody Address address)
    {
        return addressRepository.saveAndFlush(address);
    }

    @PutMapping(path = "/update")
    public Address updateAddress(@RequestBody Address address)
    {
        return addressRepository.saveAndFlush(address);
    }

}
