package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.security.SessionHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionHistoryRepository extends JpaRepository<SessionHistory,Long>
{
}
