package com.springtesting.service;

import com.springtesting.model.Person;
import com.springtesting.repo.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService
{
    @Autowired
    private PersonRepository personRepository;


    public Person getPersonById(String id)
    {
        return personRepository.findByIdContaining(id);
    }

    public List<Person> getPersons()
    {
        return personRepository.findAll();
    }

    public Person createPerson(Person person)
    {
        return personRepository.saveAndFlush(person);
    }
}
