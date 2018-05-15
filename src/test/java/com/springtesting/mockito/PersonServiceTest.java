package com.springtesting.mockito;

import com.springtesting.model.Person;
import com.springtesting.repo.PersonRepository;
import com.springtesting.service.PersonService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
public class PersonServiceTest
{
    @Autowired
    PersonService personService;
    @MockBean
    PersonRepository personRepository;

    @TestConfiguration
    static class PersonServiceTestConfiguration
    {
        @Bean
        public PersonService personService()
        {
            return new PersonService();
        }
    }




    @Test
    public void getPerson()
    {
        Person person = new Person("1001", "John", "Doe", "john@gms.cim", "333333");
        Mockito.when(personRepository.findByIdContaining(person.getId())).thenReturn(person);

        String id = "1001";
        Person returnedPersonObject = personService.getPersonById(id);
        System.out.println("Found Person -> " + returnedPersonObject.getId() + " and Created Person -> " + id);


    }

}


