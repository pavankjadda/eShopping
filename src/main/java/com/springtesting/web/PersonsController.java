package com.springtesting.web;

import com.springtesting.model.Person;
import com.springtesting.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PersonsController
{
    @Autowired
    private PersonService personService;

    @GetMapping(value = "/person/{id}")
    public Person getPersonById(@PathVariable   String  id)
    {
        return personService.getPersonById(id);
    }

    @GetMapping(value = "/persons")
    public List<Person> getPersons()
    {
        return personService.getPersons();
    }

    @PostMapping(value = "/persons")
    public Person getPersons(@RequestBody   Person  person)
    {
        return personService.createPerson(person);
    }
}
