package com.springtesting.web.api;

import com.springtesting.dto.ActiveSessionDto;
import com.springtesting.security.MyUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.session.SessionInformation;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v2/session-registry")
public class SessionRegistryController
{
    private final SessionRegistry sessionRegistry;


    @Autowired
    public SessionRegistryController(SessionRegistry sessionRegistry)
    {
        this.sessionRegistry = sessionRegistry;
    }

    @GetMapping(path = "/list")
    private List<ActiveSessionDto> getAllPrincipals()
    {
        return convertToSessionRegistryUserDto(sessionRegistry.getAllPrincipals());
    }

    private List<ActiveSessionDto> convertToSessionRegistryUserDto(List<Object> allPrincipals)
    {
        List<ActiveSessionDto> activeSessionDtoList = new ArrayList<>();
        for (Object object : allPrincipals)
        {
            MyUserDetails myUserDetails = (MyUserDetails) object;
            List<SessionInformation> sessionInformationList = sessionRegistry.getAllSessions(object, false);
            getActiveSessions(sessionInformationList, activeSessionDtoList, myUserDetails.getUsername());
        }
        return activeSessionDtoList;
    }

    private void getActiveSessions(List<SessionInformation> sessionInformationList, List<ActiveSessionDto> activeSessionDtoList, String username)
    {
        for (SessionInformation sessionInformation : sessionInformationList)
        {
            ActiveSessionDto activeSessionDto = new ActiveSessionDto();
            activeSessionDto.setExpired(sessionInformation.isExpired());
            activeSessionDto.setSessionId(sessionInformation.getSessionId());
            activeSessionDto.setLastRequest(sessionInformation.getLastRequest());
            activeSessionDto.setUsername(username);

            activeSessionDtoList.add(activeSessionDto);
        }
    }


}
