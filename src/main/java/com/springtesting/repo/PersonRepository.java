package com.springtesting.repo;

import com.springtesting.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PersonRepository extends JpaRepository<Person, String>
{
    List<Person> findAll();

    Person findByIdContaining(String id);

    Person findByFirstNameContains(String firstName);

    Person findByLastNameContains(String lastName);

    @SuppressWarnings("unchecked")
    Person saveAndFlush(Person person);

}
