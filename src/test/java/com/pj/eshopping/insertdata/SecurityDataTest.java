package com.pj.eshopping.insertdata;

import com.pj.eshopping.domain.user.Role;
import com.pj.eshopping.domain.user.User;
import com.pj.eshopping.repo.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Collection;
import java.util.List;

@ExtendWith(SpringExtension.class)
@DataJpaTest
@EnableAspectJAutoProxy(proxyTargetClass = true)
@ActiveProfiles(value = "integrationtest")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class SecurityDataTest {
    @Autowired
    private UserRepository userRepository;

    @Test
    void getUser() {
        User user = userRepository.findByUsername("admin");
        System.out.println(user.toString());
    }

    @Test
    void getUsers() {
        List<User> userList = userRepository.findAll();
        for (User user : userList) {
            System.out.println(user.toString());
        }
    }

    @Test
    void getUserRoles() {
        User user = userRepository.findByUsername("admin");
        System.out.println(user.toString());

        Collection<Role> roleCollection = user.getRoles();
        for (Role role : roleCollection)
            System.out.println(role.toString());
    }
}