package com.pj.eshopping.repo;

import com.pj.eshopping.domain.user.Country;
import com.pj.eshopping.domain.user.Region;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CountryRepository extends JpaRepository<Country, Long>
{
	Optional<Country> findByNameAndRegion(String name, Region region);

	Optional<Country> findByName(String name);

	@Override
	List<Country> findAll(Sort sort);
}
