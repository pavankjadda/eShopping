package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.tax.TaxRate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaxRateRepository extends JpaRepository<TaxRate,Long>
{
}
