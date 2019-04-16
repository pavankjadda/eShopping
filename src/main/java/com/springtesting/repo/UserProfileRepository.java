package com.springtesting.repo;

import com.springtesting.model.user.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserProfileRepository extends JpaRepository<UserProfile, Long>
{
    Optional<UserProfile> findAllByUserId(Long id);
}
