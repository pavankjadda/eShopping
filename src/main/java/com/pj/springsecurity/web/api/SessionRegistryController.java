package com.pj.springsecurity.web.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/session-registry")
public class SessionRegistryController
{
    /*
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

*/
}
