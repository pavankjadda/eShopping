package com.pj.eshopping.security;

import com.pj.eshopping.domain.user.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class MyUserDetails implements UserDetails
{
	private User user;

	private Collection<? extends GrantedAuthority> roles;

	public MyUserDetails(User user, Collection<? extends GrantedAuthority> roles)
	{
		this.user = user;
		this.roles = roles;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities()
	{
		return roles;
	}

	@Override
	public String getPassword()
	{
		return user.getPassword();
	}

	@Override
	public String getUsername()
	{
		return user.getUsername();
	}

	@Override
	public boolean isAccountNonExpired()
	{
		return user.getAccountNonExpired();
	}

	@Override
	public boolean isAccountNonLocked()
	{
		return user.getAccountNonLocked();
	}

	/**
	 * Indicates whether the user's credentials (password) has expired. Expired
	 * credentials prevent user.
	 *
	 * @return <code>true</code> if the user's credentials are valid (ie non-expired),
	 * <code>false</code> if no longer valid (ie expired)
	 */
	@Override
	public boolean isCredentialsNonExpired()
	{
		return user.getCredentialsNonExpired();
	}

	@Override
	public boolean isEnabled()
	{
		return user.getActive();
	}
}
