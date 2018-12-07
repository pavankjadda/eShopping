package com.springtesting.web.api;


import com.springtesting.model.City;
import com.springtesting.repo.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v2/city")
public class CityController
{
    private final CityRepository cityRepository;

    @Autowired
    public CityController(CityRepository cityRepository)
    {
        this.cityRepository = cityRepository;
    }

    @PostMapping(path = "/create")
    public void createCity(@RequestBody City city)
    {
        cityRepository.save(city);
    }

    @GetMapping(value = "/list")
    public List<City> getCities()
    {
        return cityRepository.findAll();
    }

    @GetMapping(value = "/find/{id}")
    public Optional<City> getCityById(@PathVariable Long id)
    {
        return cityRepository.findById(id);
    }


}
