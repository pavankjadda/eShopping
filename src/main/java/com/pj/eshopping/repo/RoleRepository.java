package com.pj.eshopping.repo;

import com.pj.eshopping.domain.user.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long>
{
}
