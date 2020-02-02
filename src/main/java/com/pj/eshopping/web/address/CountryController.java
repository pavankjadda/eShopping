package com.pj.eshopping.web.address;

import com.pj.eshopping.domain.user.Country;
import com.pj.eshopping.repo.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/country")
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
		return countryRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
	}

	@GetMapping(value = "/find/{id}")
	public Optional<Country> getCountryById(@PathVariable Long id)
	{
		return countryRepository.findById(id);
	}

}
