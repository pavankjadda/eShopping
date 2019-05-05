package com.pj.springsecurity.web.api.tax;

import com.pj.springsecurity.model.tax.TaxRate;
import com.pj.springsecurity.repo.TaxRateRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/tax_rate")
public class TaxRateController
{
    private final TaxRateRepository taxRateRepository;

    public TaxRateController(TaxRateRepository taxRateRepository)
    {
        this.taxRateRepository = taxRateRepository;
    }

    @GetMapping(value = "/list")
    public List<TaxRate> getAllTaxRates()
    {
        return taxRateRepository.findAll();
    }

    @GetMapping(value = "/find/{id}")
    public Optional<TaxRate> getTaxRateById(@PathVariable Long id)
    {
        return taxRateRepository.findById(id);
    }

    @PostMapping(path = "/create")
    public TaxRate createTaxRate(@RequestBody TaxRate taxRate)
    {
        return taxRateRepository.saveAndFlush(taxRate);
    }

    @PutMapping(path = "/update")
    public TaxRate updateTaxRate(@RequestBody TaxRate taxRate)
    {
        return taxRateRepository.saveAndFlush(taxRate);
    }

}
