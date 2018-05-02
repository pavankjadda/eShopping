package com.springtesting;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.util.*;
import java.lang.*;
import java.io.*;

@SpringBootApplication
public class GFG
{
    public static void main(String[] args)
    {
        ConfigurableApplicationContext applicationContext=SpringApplication.run(GFG.class, args);
        PropertyResourceTest dbConfig= (PropertyResourceTest) applicationContext.getBean("propertyResourceTest");
        System.out.println("jdbcUrl-> "+dbConfig.getJdbcUrl());
        System.out.println("jdbUsername-> "+dbConfig.getJdbcUsername());
        System.out.println("jdbcPassword-> "+dbConfig.getJdbcPassword());
    }

}
