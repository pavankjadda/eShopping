package com.pj.eshopping.repo;

import com.pj.eshopping.model.user.FailedLogin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FailedLoginRepository extends JpaRepository<FailedLogin, Long>
{
}
