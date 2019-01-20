package com.springtesting;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.List;
import java.util.Map;

@Component
@Data
public class DatabaseConfig
{
    @NotBlank
    private String host;

    @Min(1025)
    @Max(65536)
    private int port;

    @Pattern(regexp = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,6}$")
    private String from;
    private ConfigProperties.Credentials credentials;
    private List<String> defaultRecipients;
    private Map<String, String> additionalHeaders;
}
