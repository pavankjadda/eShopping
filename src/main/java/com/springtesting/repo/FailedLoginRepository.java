package com.springtesting.repo;

import com.springtesting.model.user.FailedLogin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FailedLoginRepository extends JpaRepository<FailedLogin,Long>
{
}
