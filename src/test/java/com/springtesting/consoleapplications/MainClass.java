package com.springtesting.consoleapplications;

import com.springtesting.model.user.User;

public class MainClass
{
    public static void main(String[] args)
    {
        User user = new User();
        user.setActive(true);
        user.setId(1L);
        user.setPassword("admin");
        user.setUsername("admin");

        System.out.println(user.toString());
    }
}
