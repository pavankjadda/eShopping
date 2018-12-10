package com.springtesting.security.providers;

import org.springframework.session.FindByIndexNameSessionRepository;
import org.springframework.session.Session;

import java.util.Map;

public class CustomFindByIndexNameSessionRepository implements FindByIndexNameSessionRepository<Session>
{
    @Override
    public Map<String, Session> findByIndexNameAndIndexValue(String indexName, String indexValue)
    {
        return null;
    }

    @Override
    public Session createSession()
    {
        return null;
    }

    @Override
    public void save(Session session)
    {

    }

    @Override
    public Session findById(String id)
    {
        return null;
    }

    @Override
    public void deleteById(String id)
    {

    }
}
