package com.springtesting.security;


import com.springtesting.repo.UserRepository;
import com.springtesting.service.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter
{
    private final MyUserDetailsService userDetailsService;

    @Autowired
    public SecurityConfig(MyUserDetailsService userDetailsService)
    {
        this.userDetailsService = userDetailsService;
    }


    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception
    {

        auth.authenticationProvider(getDaoAuthenticationProvider());

    }

    @Bean
    public DaoAuthenticationProvider getDaoAuthenticationProvider()
    {
        DaoAuthenticationProvider daoAuthenticationProvider=new DaoAuthenticationProvider();
        daoAuthenticationProvider.setUserDetailsService(userDetailsService);
        daoAuthenticationProvider.setPasswordEncoder(getBCryptPasswordEncoder());
        return daoAuthenticationProvider;
    }

    @Bean
    public PasswordEncoder getBCryptPasswordEncoder()
    {
        return new BCryptPasswordEncoder(11);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception
    {
        http.authorizeRequests()
            .antMatchers("api/**").permitAll()
            .anyRequest().authenticated()
            .and()
        .formLogin()
            .loginPage("/login")
            .permitAll()
            .and()
        .logout()
            .permitAll();
    }

    @Override
    public void configure(WebSecurity web) throws Exception
    {
        web
            .ignoring()
            .antMatchers("/resources/**", "/static/**", "/css/**", "/js/**", "/images/**");
    }
}
