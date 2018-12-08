package com.springtesting.security;

import com.springtesting.model.Privilege;
import com.springtesting.model.Role;
import com.springtesting.model.User;
import com.springtesting.repo.RoleRepository;
import com.springtesting.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MyUserDetailsService implements UserDetailsService
{
    private UserRepository userRepository;

    private final RoleRepository roleRepository;

    @Autowired
    public MyUserDetailsService(UserRepository userRepository, RoleRepository roleRepository)
    {
        this.userRepository=userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
    {
        User user=userRepository.findByUsername(username);
        if(user == null)
            throw new UsernameNotFoundException("Could not find Username");
        //return new MyUserPrincipal(user,getAuthorities(user.getRoles()));
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(), user.getPassword(), user.getActive(), true, true,
                true, getAuthorities(user.getRoles()));
    }

    private List<? extends GrantedAuthority> getAuthorities(List<Role> roles)
    {
        return getGrantedAuthorities(getPrivileges(roles));
    }

    private List<String> getPrivileges(List<Role> roles)
    {
        List<String> privileges = new ArrayList<>();
        List<Privilege> collection = new ArrayList<>();
        for (Role role : roles)
        {
            collection.addAll(role.getPrivileges());
        }
        for (Privilege item : collection)
        {
            privileges.add(item.getName());
        }
        return privileges;
    }

    private List<GrantedAuthority> getGrantedAuthorities(List<String> privileges)
    {
        List<GrantedAuthority> authorities = new ArrayList<>();
        for (String privilege : privileges)
        {
            authorities.add(new SimpleGrantedAuthority(privilege));
        }
        return authorities;
    }
}
