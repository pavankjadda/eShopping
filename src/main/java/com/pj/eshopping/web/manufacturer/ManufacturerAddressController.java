package com.pj.eshopping.web.manufacturer;

import com.pj.eshopping.domain.manufacturer.ManufacturerAddress;
import com.pj.eshopping.repo.ManufacturerAddressRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/manufacturer_address")
public class ManufacturerAddressController {
    private final ManufacturerAddressRepository repository;

    public ManufacturerAddressController(ManufacturerAddressRepository repository) {
        this.repository = repository;
    }

    @GetMapping(value = "/list")
    public List<ManufacturerAddress> getAddresses() {
        return repository.findAll();
    }

    @GetMapping(value = "/find/{id}")
    public Optional<ManufacturerAddress> getAddressById(@PathVariable Long id) {
        return repository.findById(id);
    }

    @PostMapping(path = "/create")
    public ManufacturerAddress createAddress(@RequestBody ManufacturerAddress manufacturerAddress) {
        return repository.saveAndFlush(manufacturerAddress);
    }

    @PutMapping(path = "/update")
    public ManufacturerAddress updateAddress(@RequestBody ManufacturerAddress manufacturerAddress) {
        return repository.saveAndFlush(manufacturerAddress);
    }
}