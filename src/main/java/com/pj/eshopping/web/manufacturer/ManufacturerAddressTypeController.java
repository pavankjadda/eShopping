package com.pj.eshopping.web.manufacturer;

import com.pj.eshopping.domain.manufacturer.ManufacturerAddressType;
import com.pj.eshopping.repo.ManufacturerAddressTypeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/manufacturer_address_type")
public class ManufacturerAddressTypeController {
    private final ManufacturerAddressTypeRepository repository;

    public ManufacturerAddressTypeController(ManufacturerAddressTypeRepository repository) {
        this.repository = repository;
    }

    @PostMapping(path = "/create")
    public void createAddressType(@RequestBody ManufacturerAddressType manufacturerAddressType) {
        repository.save(manufacturerAddressType);
    }

    @GetMapping(value = "/list")
    public List<ManufacturerAddressType> getAddressTypes() {
        return repository.findAll();
    }

    @GetMapping(value = "/find/{id}")
    public Optional<ManufacturerAddressType> getAddressTypeById(@PathVariable Long id) {
        return repository.findById(id);
    }
}