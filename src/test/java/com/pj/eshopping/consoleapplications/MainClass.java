package com.pj.eshopping.consoleapplications;

import com.pj.eshopping.domain.user.User;

import java.util.stream.Collectors;
import java.util.stream.Stream;

public class MainClass {
    public static void main(String[] args) {
        var userSet = Stream.of("one", "teo", "three").map(s -> new User(s, s, true, null)).collect(Collectors.toSet());
        userSet.forEach(user1 -> System.out.println(user1.toString()));
    }
}