package com.springtesting.security;


import com.springtesting.repo.PersonRepository;
import com.springtesting.repo.ProductRepository;
import com.springtesting.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter
{
    private final UserRepository userRepository;

    @Autowired
    public SecurityConfig(UserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/").access("hasRole('USER')")
                .antMatchers("/**").permitAll()
                .and()
                .formLogin()
                .loginPage("/login.html")
                .failureUrl("/login?error=true");
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception
    {
        auth.userDetailsService(new UserDetailsService()
        {
            @Override
            public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
            {
                 return userRepository.getOne(username);
            }
        });
    }
}
