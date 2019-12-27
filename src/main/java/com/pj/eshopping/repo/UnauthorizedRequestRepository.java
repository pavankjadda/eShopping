package com.pj.eshopping.repo;

import com.pj.eshopping.model.security.UnauthorizedRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UnauthorizedRequestRepository extends JpaRepository<UnauthorizedRequest, Long>
{
}
