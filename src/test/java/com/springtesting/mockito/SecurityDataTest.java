package com.springtesting.mockito;

import com.springtesting.model.User;
import com.springtesting.repo.PrivilegeRepository;
import com.springtesting.repo.RoleRepository;
import com.springtesting.repo.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest
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
    public void getUserRoles()
    {
        User user=userRepository.findByUsername("admin");
        System.out.println(user.toString());
    }
}
