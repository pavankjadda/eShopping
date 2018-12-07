package com.springtesting.repo;

import com.springtesting.model.Currency;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CurrencyRepository extends JpaRepository<Currency,Long>
{
    Optional<Currency> findByAndIsoCode(String isoCode);
}
