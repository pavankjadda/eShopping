package com.pj.eshopping.web.manufacturer;

import com.pj.eshopping.domain.manufacturer.ManufacturerAddress;
import com.pj.eshopping.repo.ManufacturerAddressRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/manufacturer_address")
public class ManufacturerAddressController
{
	private final ManufacturerAddressRepository manufacturerAddressRepository;

	public ManufacturerAddressController(ManufacturerAddressRepository manufacturerAddressRepository)
	{
		this.manufacturerAddressRepository = manufacturerAddressRepository;
	}

	@GetMapping(value = "/list")
	public List<ManufacturerAddress> getAddresses()
	{
		return manufacturerAddressRepository.findAll();
	}

	@GetMapping(value = "/find/{id}")
	public Optional<ManufacturerAddress> getAddressById(@PathVariable Long id)
	{
		return manufacturerAddressRepository.findById(id);
	}

	@PostMapping(path = "/create")
	public ManufacturerAddress createAddress(@RequestBody ManufacturerAddress manufacturerAddress)
	{
		return manufacturerAddressRepository.saveAndFlush(manufacturerAddress);
	}

	@PutMapping(path = "/update")
	public ManufacturerAddress updateAddress(@RequestBody ManufacturerAddress manufacturerAddress)
	{
		return manufacturerAddressRepository.saveAndFlush(manufacturerAddress);
	}

}
