package com.springtesting.repo;

import com.springtesting.model.user.Country;
import com.springtesting.model.user.Region;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CountryRepository extends JpaRepository<Country, Long>
{
    Optional<Country> findByNameAndRegion(String name, Region region);

    Optional<Country> findByName(String name);
}
