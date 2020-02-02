package com.pj.eshopping.web.manufacturer;

import com.pj.eshopping.domain.manufacturer.ManufacturerAddressType;
import com.pj.eshopping.repo.ManufacturerAddressTypeRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/manufacturer_address_type")
public class ManufacturerAddressTypeController
{
	private final ManufacturerAddressTypeRepository manufacturerAddressTypeRepository;

	public ManufacturerAddressTypeController(ManufacturerAddressTypeRepository manufacturerAddressTypeRepository)
	{
		this.manufacturerAddressTypeRepository = manufacturerAddressTypeRepository;
	}

	@PostMapping(path = "/create")
	public void createAddressType(@RequestBody ManufacturerAddressType manufacturerAddressType)
	{
		manufacturerAddressTypeRepository.save(manufacturerAddressType);
	}

	@GetMapping(value = "/list")
	public List<ManufacturerAddressType> getAddressTypes()
	{
		return manufacturerAddressTypeRepository.findAll();
	}

	@GetMapping(value = "/find/{id}")
	public Optional<ManufacturerAddressType> getAddressTypeById(@PathVariable Long id)
	{
		return manufacturerAddressTypeRepository.findById(id);
	}

}
