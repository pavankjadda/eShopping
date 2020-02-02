package com.pj.eshopping.web.address;


import com.pj.eshopping.domain.user.City;
import com.pj.eshopping.repo.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/city")
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
	public Page<City> getCities(@RequestParam(required = false) Integer pageNumber, @RequestParam(required = false) Integer pageSize)
	{
		if (pageNumber == null)
			pageNumber = 0;
		if (pageSize == null)
			pageSize = 10;
		return cityRepository.findAll(PageRequest.of(pageNumber, pageSize, Sort.by(Sort.Direction.ASC, "id")));
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
