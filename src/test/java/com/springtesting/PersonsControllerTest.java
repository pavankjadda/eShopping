package com.springtesting;

import com.springtesting.model.Person;
import com.springtesting.service.PersonService;
import com.springtesting.web.PersonsController;
import org.hamcrest.CoreMatchers;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(PersonsController.class)
public class PersonsControllerTest
{
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PersonService personService;

    @Test
    public void getPersonById() throws Exception
    {
        Person john = new Person("1001", "John", "Doe", "john@gms.cim", "333333");
        Person alex = new Person("1002", "Alex", "Dason", "john@gms.cim", "333333");
        Person jack = new Person("1003", "Jack", "Reache", "john@gms.cim", "333333");
        List<Person> personList = Arrays.asList(john, alex, jack);

        given(personService.getPersons()).willReturn(personList);
        mockMvc.perform(get("/api/persons").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$", hasSize(3))).andExpect(jsonPath("$[0].id", CoreMatchers.is(john.getId()))).andExpect(jsonPath("$[1].id", CoreMatchers.is(alex.getId()))).andExpect(jsonPath("$[2].id", CoreMatchers.is(jack.getId())));
    }
}
