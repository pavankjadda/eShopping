package com.pj.springsecurity.web.api.address;


import com.pj.springsecurity.model.user.City;
import com.pj.springsecurity.repo.CityRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.time.Instant;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/city")
public class CityController
{
    private final CityRepository cityRepository;

    private Logger logger=LoggerFactory.getLogger(CityController.class);

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
    public Page<City> getCities(@RequestParam(required = false) Integer pageNumber, @RequestParam(required = false) Integer limit)
    {
        if (pageNumber == null)
            pageNumber = 0;
        if (limit == null)
            limit = 10;
        return cityRepository.findAll(PageRequest.of(pageNumber, limit, Sort.by(Sort.Direction.ASC, "name")));
    }

    @GetMapping(value = "/list/all")
    public List<City> getCitiesAll()
    {
        Instant start = Instant.now();
        List<City> cities=cityRepository.findAll();
        Instant finish = Instant.now();
        long timeElapsed = Duration.between(start, finish).toMillis();
        logger.info("Total Execution time: {}",timeElapsed);
        return cities;
    }

    @GetMapping(value = "/{id}")
    public Optional<City> getCityById(@PathVariable Long id)
    {
        return cityRepository.findById(id);
    }

    @GetMapping(value = "/find/state/{id}")
    public List<City> getCityByBasedOnStateId(@PathVariable Long id)
    {
        return cityRepository.findAllByStateIdOrderByNameAsc(id);
    }

    @GetMapping(value = "/find")
    public Optional<City> getCityByNameAndState(@RequestParam(value = "name") String cityName, @RequestParam(value = "state") String stateName)
    {
        return cityRepository.findByNameAndState(cityName, null);
    }
}
