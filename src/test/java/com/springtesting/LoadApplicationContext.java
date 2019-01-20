package com.springtesting;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class LoadApplicationContext
{

    //Executes after Application Context loaded
    //See more information here https://spring.io/understanding/application-context
    @Test
    public void contextLoads()
    {
    }

}
