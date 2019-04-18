package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.security.UnauthorizedRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UnauthorizedRequestRepository  extends JpaRepository<UnauthorizedRequest,Long>
{
}
