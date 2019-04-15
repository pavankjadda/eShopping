package com.springtesting.repo;

import com.springtesting.model.user.State;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StateRepository extends JpaRepository<State, Long>
{
    Optional<State> findByName(String name);

    List<State> findAllByCountryIdOrderByNameAsc(Long id);
}
