package com.springtesting.session;

import com.springtesting.model.SessionHistory;
import com.springtesting.repo.SessionHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

//@Service
//@Transactional
public class SessionHistoryService
{
   /* @Autowired
    private SessionHistoryRepository sessionHistoryRepository;

    public SessionHistoryService()
    {

    }

    public void saveSuccessLogin(SessionHistory sessionHistory)
    {
        sessionHistoryRepository.saveAndFlush(sessionHistory);
    }

    public void saveFailureLogin(SessionHistory sessionHistory)
    {
        sessionHistoryRepository.saveAndFlush(sessionHistory);
    }*/
}
