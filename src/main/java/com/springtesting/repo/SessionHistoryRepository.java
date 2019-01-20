package com.springtesting.repo;

import com.springtesting.model.SessionHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SessionHistoryRepository extends JpaRepository<SessionHistory,Long>
{
    List<SessionHistory> findAllBySessionId(String sessionId);

    List<SessionHistory> findAllByUsername(String username);
}
