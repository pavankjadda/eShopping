package com.pj.eshopping.consoleapplications;

import com.pj.eshopping.domain.user.User;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class MainClass
{
    public static void main(String[] args)
    {
        Set<User> userSet=List.of("one", "teo", "three").stream().map(s -> new User(s, s, true, null )).collect(Collectors.toSet());
        userSet.forEach(user1 -> System.out.println(user1.toString()));
    }
}
