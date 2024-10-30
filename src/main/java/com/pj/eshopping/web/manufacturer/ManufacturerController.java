package com.pj.eshopping.web.manufacturer;

import com.pj.eshopping.domain.manufacturer.Manufacturer;
import com.pj.eshopping.repo.ManufacturerRepository;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/v1/manufacturer")
public class ManufacturerController {
    private final ManufacturerRepository repository;

    public ManufacturerController(ManufacturerRepository repository) {
        this.repository = repository;
    }

    @GetMapping(value = "/list")
    public List<Manufacturer> getManufacturers() {
        return repository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    @GetMapping(value = "/find/{id}")
    public Optional<Manufacturer> getManufacturerById(@PathVariable Long id) {
        return repository.findById(id);
    }

    @PostMapping(path = "/create")
    public Manufacturer createManufacturer(@RequestBody Manufacturer manufacturer) {
        return repository.saveAndFlush(manufacturer);
    }

    @PutMapping(path = "/update")
    public Manufacturer updateManufacturer(@RequestBody Manufacturer manufacturer) {
        return repository.saveAndFlush(manufacturer);
    }

    @DeleteMapping(path = "/delete/{id}")
    public void updateManufacturer(@PathVariable Long id) {
        repository.deleteById(id);
    }
}