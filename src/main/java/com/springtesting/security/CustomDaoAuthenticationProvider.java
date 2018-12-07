package com.springtesting.security;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsPasswordService;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.Assert;

public class CustomDaoAuthenticationProvider extends AbstractUserDetailsAuthenticationProvider
{
    private static final String USER_NOT_FOUND_PASSWORD = "userNotFoundPassword";

    private volatile String userNotFoundEncodedPassword;

    private PasswordEncoder passwordEncoder;

    private UserDetailsService userDetailsService;

    private UserDetailsPasswordService userDetailsPasswordService;


    public CustomDaoAuthenticationProvider()
    {
        setPasswordEncoder(PasswordEncoderFactories.createDelegatingPasswordEncoder());
    }

    protected void additionalAuthenticationChecks(UserDetails userDetails, UsernamePasswordAuthenticationToken authentication) throws AuthenticationException
    {
        if (authentication.getCredentials() == null)
        {
            logger.debug("Authentication failed: no credentials provided");
            throw new BadCredentialsException(messages.getMessage("AbstractUserDetailsAuthenticationProvider.badCredentials", "Message: Authentication failed: no credentials provided"));
        }

        String presentedPassword = authentication.getCredentials().toString();

        if (!passwordEncoder.matches(presentedPassword, userDetails.getPassword()))
        {
            logger.debug("Authentication failed: password does not match stored value");
            throw new BadCredentialsException(messages.getMessage("AbstractUserDetailsAuthenticationProvider.badCredentials", "Message: Authentication failed: password does not match stored value"));
        }
    }

    protected void doAfterPropertiesSet() throws Exception
    {
        Assert.notNull(this.userDetailsService, "A UserDetailsService must be set");
    }

    protected final UserDetails retrieveUser(String username, UsernamePasswordAuthenticationToken authentication) throws AuthenticationException
    {
        prepareTimingAttackProtection();
        try
        {
            UserDetails loadedUser = this.getUserDetailsService().loadUserByUsername(username);
            if (loadedUser == null)
            {
                throw new InternalAuthenticationServiceException("UserDetailsService returned null, which is an interface contract violation");
            }
            return loadedUser;
        }
        catch (UsernameNotFoundException ex)
        {
            mitigateAgainstTimingAttack(authentication);
            throw ex;
        }
        catch (InternalAuthenticationServiceException ex)
        {
            throw ex;
        }
        catch (Exception ex)
        {
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex);
        }
    }

    @Override
    protected Authentication createSuccessAuthentication(Object principal, Authentication authentication, UserDetails user)
    {
        boolean upgradeEncoding = this.userDetailsPasswordService != null && this.passwordEncoder.upgradeEncoding(user.getPassword());
        if (upgradeEncoding)
        {
            String presentedPassword = authentication.getCredentials().toString();
            String newPassword = this.passwordEncoder.encode(presentedPassword);
            user = this.userDetailsPasswordService.updatePassword(user, newPassword);
        }
        return super.createSuccessAuthentication(principal, authentication, user);
    }

    private void prepareTimingAttackProtection()
    {
        if (this.userNotFoundEncodedPassword == null)
        {
            this.userNotFoundEncodedPassword = this.passwordEncoder.encode(USER_NOT_FOUND_PASSWORD);
        }
    }

    private void mitigateAgainstTimingAttack(UsernamePasswordAuthenticationToken authentication)
    {
        if (authentication.getCredentials() != null)
        {
            String presentedPassword = authentication.getCredentials().toString();
            this.passwordEncoder.matches(presentedPassword, this.userNotFoundEncodedPassword);
        }
    }

    protected PasswordEncoder getPasswordEncoder()
    {
        return passwordEncoder;
    }


    public void setPasswordEncoder(PasswordEncoder passwordEncoder)
    {
        Assert.notNull(passwordEncoder, "passwordEncoder cannot be null");
        this.passwordEncoder = passwordEncoder;
        this.userNotFoundEncodedPassword = null;
    }

    protected UserDetailsService getUserDetailsService()
    {
        return userDetailsService;
    }

    public void setUserDetailsService(UserDetailsService userDetailsService)
    {
        this.userDetailsService = userDetailsService;
    }

    public void setUserDetailsPasswordService(
            UserDetailsPasswordService userDetailsPasswordService)
    {
        this.userDetailsPasswordService = userDetailsPasswordService;
    }
}
