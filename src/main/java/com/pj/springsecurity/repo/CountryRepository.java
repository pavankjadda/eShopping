package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.user.Country;
import com.pj.springsecurity.model.user.Region;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CountryRepository extends JpaRepository<Country, Long>
{
    Optional<Country> findByNameAndRegion(String name, Region region);

    Optional<Country> findByName(String name);
}
