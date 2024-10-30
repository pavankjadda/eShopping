package com.pj.eshopping.repo;

import com.pj.eshopping.domain.user.City;
import com.pj.eshopping.domain.user.State;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CityRepository extends JpaRepository<City, Long> {
    Optional<City> findByNameAndState(String name, State state);

    Optional<City> findByName(String name);

    List<City> findAllByStateIdOrderByNameAsc(Long id);
}