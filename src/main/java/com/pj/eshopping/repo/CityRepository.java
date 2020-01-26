package com.pj.eshopping.repo;

import com.pj.eshopping.domain.user.City;
import com.pj.eshopping.domain.user.State;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CityRepository extends JpaRepository<City, Long>
{
	Optional<City> findByNameAndState(String name, State state);

	Optional<City> findByName(String name);

	List<City> findByNameAndNameIsNotNull(String name);

	@Override
	Page<City> findAll(Pageable pageable);

	List<City> findAllByStateIdOrderByNameAsc(Long id);
}
