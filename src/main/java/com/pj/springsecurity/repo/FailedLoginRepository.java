package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.user.FailedLogin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FailedLoginRepository extends JpaRepository<FailedLogin,Long>
{
}
