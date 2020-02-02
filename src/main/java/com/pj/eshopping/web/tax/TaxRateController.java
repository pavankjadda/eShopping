package com.pj.eshopping.web.tax;

import com.pj.eshopping.domain.tax.TaxRate;
import com.pj.eshopping.dto.TaxRateDTO;
import com.pj.eshopping.repo.TaxRateRepository;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/tax_rate")
public class TaxRateController
{
	private final TaxRateRepository taxRateRepository;

	private final ModelMapper modelMapper;

	public TaxRateController(TaxRateRepository taxRateRepository, ModelMapper modelMapper)
	{
		this.taxRateRepository = taxRateRepository;
		this.modelMapper = modelMapper;
	}

	@GetMapping(value = "/list")
	public List<TaxRate> getAllTaxRates()
	{
		return taxRateRepository.findAll();
	}

	@GetMapping(value = "/find/state/{id}")
	public Optional<TaxRate> getTaxRateByState(@PathVariable Long id)
	{
		return taxRateRepository.findByStateId(id);
	}

	@GetMapping(value = "/find/{id}")
	public Optional<TaxRate> getTaxRateById(@PathVariable Long id)
	{
		return taxRateRepository.findById(id);
	}

	@PostMapping(path = "/create")
	public TaxRate createTaxRate(@RequestBody TaxRateDTO taxRateDTO)
	{
		TaxRate taxRate = modelMapper.map(taxRateDTO, TaxRate.class);
		return taxRateRepository.saveAndFlush(taxRate);
	}

	@PutMapping(path = "/update")
	public TaxRate updateTaxRate(@RequestBody TaxRateDTO taxRateDTO)
	{
		TaxRate taxRate = modelMapper.map(taxRateDTO, TaxRate.class);
		Optional<TaxRate> taxRateOptional = taxRateRepository.findById(taxRate.getId());
		if (taxRateOptional.isPresent())
		{
			taxRate = taxRateRepository.saveAndFlush(taxRate);
		}
		return taxRate;
	}
}
