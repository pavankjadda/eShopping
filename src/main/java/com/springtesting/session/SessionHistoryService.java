package com.springtesting.session;

import com.springtesting.model.SessionHistory;
import com.springtesting.repo.SessionHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SessionHistoryService
{
    private SessionHistoryRepository sessionHistoryRepository;

    @Autowired
    public SessionHistoryService(SessionHistoryRepository sessionHistoryRepository)
    {
        this.sessionHistoryRepository = sessionHistoryRepository;
    }

    public void saveSuccessLogin(SessionHistory sessionHistory)
    {
        sessionHistoryRepository.saveAndFlush(sessionHistory);
    }

    public void saveFailureLogin(SessionHistory sessionHistory)
    {
        sessionHistoryRepository.saveAndFlush(sessionHistory);
    }
}
