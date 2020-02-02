package com.pj.eshopping.web.address;

import com.pj.eshopping.domain.user.Address;
import com.pj.eshopping.dto.AddressDTO;
import com.pj.eshopping.repo.AddressRepository;
import com.pj.eshopping.util.UserInfoUtil;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/address")
public class AddressController
{

	private final ModelMapper modelMapper;
	private AddressRepository addressRepository;
	private UserInfoUtil userInfoUtil;

	public AddressController(AddressRepository addressRepository, ModelMapper modelMapper, UserInfoUtil userInfoUtil)
	{
		this.addressRepository = addressRepository;
		this.modelMapper = modelMapper;
		this.userInfoUtil = userInfoUtil;
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

	@PostMapping(path = {"/create", "/update"})
	public Address createAddress(@RequestBody AddressDTO addressDTO)
	{
		Address address = modelMapper.map(addressDTO, Address.class);
		address.setUserProfile(userInfoUtil.getCurrentUserProfile());

		return addressRepository.saveAndFlush(address);
	}

	@DeleteMapping(path = "/delete/{id}")
	public void deleteAddress(@PathVariable Long id)
	{
		addressRepository.findById(id).ifPresent(address -> addressRepository.delete(address));
	}
}
