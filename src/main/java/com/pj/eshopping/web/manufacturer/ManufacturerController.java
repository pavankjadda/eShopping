package com.pj.eshopping.web.manufacturer;

import com.pj.eshopping.domain.manufacturer.Manufacturer;
import com.pj.eshopping.repo.ManufacturerRepository;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.DeleteMapping;
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
@RequestMapping(value = "/api/v1/manufacturer")
public class ManufacturerController
{
	private final ManufacturerRepository manufacturerRepository;

	public ManufacturerController(ManufacturerRepository manufacturerRepository)
	{
		this.manufacturerRepository = manufacturerRepository;
	}

	@GetMapping(value = "/list")
	public List<Manufacturer> getManufacturers()
	{
		return manufacturerRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
	}

	@GetMapping(value = "/find/{id}")
	public Optional<Manufacturer> getManufacturerById(@PathVariable Long id)
	{
		return manufacturerRepository.findById(id);
	}

	@PostMapping(path = "/create")
	public Manufacturer createManufacturer(@RequestBody Manufacturer manufacturer)
	{
		return manufacturerRepository.saveAndFlush(manufacturer);
	}

	@PutMapping(path = "/update")
	public Manufacturer updateManufacturer(@RequestBody Manufacturer manufacturer)
	{
		return manufacturerRepository.saveAndFlush(manufacturer);
	}

	@DeleteMapping(path = "/delete/{id}")
	public void updateManufacturer(@PathVariable Long id)
	{
		manufacturerRepository.deleteById(id);
	}
}
