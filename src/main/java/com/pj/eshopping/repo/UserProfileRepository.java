package com.pj.eshopping.repo;

import com.pj.eshopping.domain.user.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserProfileRepository extends JpaRepository<UserProfile, Long>
{
	Optional<UserProfile> findAllByUserId(Long id);
}
