package com.springtesting.mockito;

import com.springtesting.SpringtestingApplication;
import com.springtesting.model.Person;
import com.springtesting.repo.PersonRepository;
import com.springtesting.util.JsonUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = SpringtestingApplication.class)
@AutoConfigureMockMvc
@TestPropertySource(locations = "classpath:application-integrationtest.properties")
public class PersonControllerIntegrationTest
{
    @Autowired
    MockMvc mockMvc;

    @Autowired
    PersonRepository personRepository;

    @Test
    public void createPersons_And_GetPersonsTest() throws Exception
    {
        Person john = createPerson("1001", "John", "Doe", "john@gms.cim", "333333");
        Person jason = createPerson("1002", "Jason", "Stan", "john@gms.cim", "333333");
        Person jack = createPerson("1003", "Jack", "Reacher", "john@gms.cim", "333333");

        mockMvc.perform(get("/api/persons").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk()).andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id").value(john.getId()));
    }

    @Test
    public void whenValidInput_createPerson() throws Exception
    {
        Person person = createPerson("1001", "John", "Doe", "john@gms.cim", "333333");
        mockMvc.perform(post("/api/persons").contentType(MediaType.APPLICATION_JSON).content(JsonUtil.toJson(person)));
        List<Person> retrivedPersons = personRepository.findAll();
        assertThat(retrivedPersons).extracting(Person::getId).contains("1001");
    }

    private Person createPerson(String id, String firstName, String lastName, String email, String phone)
    {
        Person person = new Person(id, firstName, lastName, email, phone);
        personRepository.saveAndFlush(person);
        return person;
    }
}
