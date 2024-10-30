package com.pj.eshopping.web.address;

import com.pj.eshopping.domain.user.Country;
import com.pj.eshopping.repo.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/country")
public class CountryController {
    private final CountryRepository repository;

    @Autowired
    public CountryController(CountryRepository repository) {
        this.repository = repository;
    }

    @PostMapping(path = "/create")
    public void createCountry(@RequestBody Country country) {
        repository.save(country);
    }

    @GetMapping(value = "/list")
    public List<Country> getCountries() {
        return repository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    @GetMapping(value = "/find/{id}")
    public Optional<Country> getCountryById(@PathVariable Long id) {
        return repository.findById(id);
    }

}