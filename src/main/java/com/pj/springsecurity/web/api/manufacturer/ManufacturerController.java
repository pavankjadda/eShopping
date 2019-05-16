package com.pj.springsecurity.web.api.manufacturer;

import com.pj.springsecurity.model.manufacturer.Manufacturer;
import com.pj.springsecurity.repo.ManufacturerRepository;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

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
        return manufacturerRepository.findAll(Sort.by(Sort.Direction.ASC,"id"));
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
