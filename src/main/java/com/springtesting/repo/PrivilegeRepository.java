package com.springtesting.repo;

import com.springtesting.model.user.Privilege;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrivilegeRepository extends JpaRepository<Privilege, Long>
{
}
