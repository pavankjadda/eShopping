package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.user.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long>
{
}
