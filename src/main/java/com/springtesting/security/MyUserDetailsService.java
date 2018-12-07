package com.springtesting.security;

import com.springtesting.model.User;
import com.springtesting.repo.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService
{
    private UserRepository userRepository;

    public MyUserDetailsService(UserRepository userRepository)
    {
        this.userRepository=userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
    {
        User user=userRepository.findByUsername(username);
        if(user == null)
            throw new UsernameNotFoundException("Could not find Username");
        return new MyUserPrincipal(user);
    }
}
