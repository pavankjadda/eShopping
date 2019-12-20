package com.pj.eshopping.repo;

import com.pj.eshopping.model.user.Privilege;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrivilegeRepository extends JpaRepository<Privilege, Long>
{
}
