package com.springtesting.session;

import com.springtesting.model.SessionHistory;
import com.springtesting.repo.SessionHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionBindingListener;
import java.time.LocalDateTime;

@Component
public class CustomHttpSessionBindingListener implements HttpSessionBindingListener
{
    private SessionHistoryRepository sessionHistoryRepository;
    private String username;

    public CustomHttpSessionBindingListener() {}

    @Autowired
    public CustomHttpSessionBindingListener(SessionHistoryRepository sessionHistoryRepository)
    {
        this.sessionHistoryRepository = sessionHistoryRepository;
    }

    @Override
    public void valueBound(HttpSessionBindingEvent event)
    {
        CustomHttpSessionBindingListener customHttpSessionBindingListener= (CustomHttpSessionBindingListener) event.getValue();
        sessionHistoryRepository.saveAndFlush(new SessionHistory(customHttpSessionBindingListener.username,
                event.getSession().getId(),
                event.getSession().getCreationTime()));
    }

    @Override
    public void valueUnbound(HttpSessionBindingEvent event)
    {
        String sessionId=event.getSession().getId();
        //CustomHttpSessionBindingListener customHttpSessionBindingListener= (CustomHttpSessionBindingListener) event.getValue();
        SessionHistory sessionHistory=sessionHistoryRepository.findAllByUsername(sessionId).get(0);
        sessionHistory.setLogoutDateTime(LocalDateTime.now());
        sessionHistoryRepository.saveAndFlush(sessionHistory);
    }

    public String getUsername()
    {
        return username;
    }

    public void setUsername(String username)
    {
        this.username = username;
    }
}
