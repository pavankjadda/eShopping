package com.springtesting.web.api;


import com.springtesting.model.City;
import com.springtesting.repo.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

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

    /*@GetMapping(value = "/list")
    public List<City> getCities()
    {
        return cityRepository.findAll();
    }*/

    @GetMapping(value = "/list")
    public Page<City> getCities(@RequestParam(required = false) Integer pageNumber, @RequestParam(required = false) Integer limit)
    {
        if (pageNumber == null)
            pageNumber = 0;
        if (limit == null)
            limit = 10;
        return cityRepository.findAll(PageRequest.of(pageNumber, limit, Sort.by(Sort.Direction.ASC, "name")));
    }

    @GetMapping(value = "/{id}")
    public Optional<City> getCityById(@PathVariable Long id)
    {
        return cityRepository.findById(id);
    }

    @GetMapping(value = "/find")
    public Optional<City> getCityByNameAndState(@RequestParam(value = "name") String cityName, @RequestParam(value = "state") String stateName)
    {
        return cityRepository.findByNameAndState(cityName, null);
    }
}
