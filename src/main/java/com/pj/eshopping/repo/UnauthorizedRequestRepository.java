package com.pj.eshopping.repo;

import com.pj.eshopping.domain.security.UnauthorizedRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UnauthorizedRequestRepository extends JpaRepository<UnauthorizedRequest, Long>
{
}
