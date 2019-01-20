package com.springtesting.web.api;

import com.springtesting.model.Country;
import com.springtesting.repo.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v2/country")
public class CountryController
{
    private final CountryRepository countryRepository;

    @Autowired
    public CountryController(CountryRepository countryRepository)
    {
        this.countryRepository = countryRepository;
    }

    @PostMapping(path = "/create")
    public void createCountry(@RequestBody Country country)
    {
        countryRepository.save(country);
    }

    @GetMapping(value = "/list")
    public List<Country> getCountries()
    {
        return countryRepository.findAll();
    }

    @GetMapping(value = "/find/{id}")
    public Optional<Country> getCountryById(@PathVariable Long id)
    {
        return countryRepository.findById(id);
    }


}
