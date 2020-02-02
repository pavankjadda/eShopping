package com.pj.eshopping.repo;

import com.pj.eshopping.domain.order.Currency;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CurrencyRepository extends JpaRepository<Currency, Long>
{
	Optional<Currency> findByAndIsoCode(String isoCode);
}
