package com.springtesting.mockito;

import com.springtesting.model.Role;
import com.springtesting.model.User;
import com.springtesting.repo.PrivilegeRepository;
import com.springtesting.repo.RoleRepository;
import com.springtesting.repo.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Collection;
import java.util.List;

@RunWith(SpringRunner.class)
@DataJpaTest
@EnableAspectJAutoProxy(proxyTargetClass = true)
@ActiveProfiles(value = "integrationtest")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class SecurityDataTest
{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PrivilegeRepository privilegeRepository;



    @Test
    public void getUser()
    {
        User user=userRepository.findByUsername("admin");
        System.out.println(user.toString());
    }


    @Test
    public void getUsers()
    {
        List<User> userList=userRepository.findAll();
        for(User user:userList)
        {
            System.out.println(user.toString());
        }
    }

    @Test
    public void getUserRoles()
    {
        User user=userRepository.findByUsername("admin");
        System.out.println(user.toString());

        Collection<Role> roleCollection= user.getRoles();
        for (Role role:roleCollection)
            System.out.println(role.toString());
    }
}
