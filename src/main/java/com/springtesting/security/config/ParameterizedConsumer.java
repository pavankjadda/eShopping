package com.springtesting.security.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.session.FindByIndexNameSessionRepository;
import org.springframework.session.Session;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
class ParameterizedConsumer<S extends Session>
{

    private final FindByIndexNameSessionRepository<S> sessionRepository;

    @Autowired
    public ParameterizedConsumer(FindByIndexNameSessionRepository<S> sessionRepository)
    {
        this.sessionRepository = sessionRepository;
    }

    void consume()
    {
        S session = this.sessionRepository
                .findByIndexNameAndIndexValue(FindByIndexNameSessionRepository.PRINCIPAL_NAME_INDEX_NAME, "principal")
                .values().iterator().next();
        session.setAttribute("test", UUID.randomUUID().toString());
        this.sessionRepository.save(session);
    }

}