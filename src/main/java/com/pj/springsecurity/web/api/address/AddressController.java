package com.pj.springsecurity.web.api.address;

import com.pj.springsecurity.dto.AddressDTO;
import com.pj.springsecurity.model.user.Address;
import com.pj.springsecurity.repo.AddressRepository;
import com.pj.springsecurity.util.UserInfoUtil;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/address")
public class AddressController
{

    private AddressRepository addressRepository;
    private final ModelMapper modelMapper;
    private UserInfoUtil userInfoUtil;

    public AddressController(AddressRepository addressRepository, ModelMapper modelMapper, UserInfoUtil userInfoUtil)
    {
        this.addressRepository = addressRepository;
        this.modelMapper = modelMapper;
        this.userInfoUtil=userInfoUtil;
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

    @PostMapping(path = {"/create"})
    public Address createAddress(@RequestBody AddressDTO addressDTO)
    {
        Address address=modelMapper.map(addressDTO,Address.class);
        address.setUserProfile(userInfoUtil.getCurrentUserProfile());

        return addressRepository.saveAndFlush(address);
    }

    @PutMapping(path = "/update")
    public Address updateAddress(@RequestBody AddressDTO addressDTO)
    {
        Address address=modelMapper.map(addressDTO,Address.class);
        address.setUserProfile(userInfoUtil.getCurrentUserProfile());

        return addressRepository.saveAndFlush(address);
    }

    @DeleteMapping(path = "/delete/{id}")
    public void deleteAddress(@PathVariable Long id)
    {
        addressRepository.findById(id).ifPresent(address -> addressRepository.delete(address));
    }
}
