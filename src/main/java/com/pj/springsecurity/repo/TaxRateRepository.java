package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.tax.TaxRate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TaxRateRepository extends JpaRepository<TaxRate, Long>
{
	Optional<TaxRate> findByStateId(Long stateId);
}
