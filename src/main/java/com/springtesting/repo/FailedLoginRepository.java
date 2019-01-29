package com.springtesting.repo;

import com.springtesting.model.FailedLogin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FailedLoginRepository extends JpaRepository<FailedLogin,Long>
{
}
