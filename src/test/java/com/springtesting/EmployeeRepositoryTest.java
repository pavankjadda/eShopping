package com.springtesting;

import com.springtesting.model.Person;
import com.springtesting.repo.PersonRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest
public class EmployeeRepositoryTest
{
    @Autowired
    private TestEntityManager   testEntityManager;
    @Autowired
    private PersonRepository personRepository;


    @Test
    public void getPerson()
    {
        Person  person=new Person("1001","John","Doe","john@gms.cim","333333");
        testEntityManager.persist(person);
        testEntityManager.flush();

        Person returnedPersonObject=personRepository.findByIdContaining("1001");
        Assert.assertEquals(returnedPersonObject.getFirstName(), person.getFirstName());
        System.out.println("Returned Person Object: "+returnedPersonObject.toString());
    }

}
