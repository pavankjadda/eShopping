package com.pj.eshopping.repo;

import com.pj.eshopping.model.security.SessionHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionHistoryRepository extends JpaRepository<SessionHistory, Long>
{
}
