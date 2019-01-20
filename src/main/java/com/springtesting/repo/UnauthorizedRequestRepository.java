package com.springtesting.repo;

import com.springtesting.model.security.UnauthorizedRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UnauthorizedRequestRepository extends JpaRepository<UnauthorizedRequest, Long>
{
}
