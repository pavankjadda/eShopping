package com.pj.eshopping.repo;

import com.pj.eshopping.model.tax.TaxRate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TaxRateRepository extends JpaRepository<TaxRate, Long>
{
	Optional<TaxRate> findByStateId(Long stateId);
}
