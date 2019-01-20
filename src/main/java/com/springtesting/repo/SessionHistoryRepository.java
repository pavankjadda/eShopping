package com.springtesting.repo;

import com.springtesting.model.security.SessionHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionHistoryRepository extends JpaRepository<SessionHistory, Long>
{
}
