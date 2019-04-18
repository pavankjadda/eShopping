package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.user.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserProfileRepository extends JpaRepository<UserProfile, Long>
{
    Optional<UserProfile> findAllByUserId(Long id);
}
