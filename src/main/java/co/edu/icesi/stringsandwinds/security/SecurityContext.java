package co.edu.icesi.stringsandwinds.security;

import lombok.*;

import java.io.Serializable;
import java.util.UUID;

@Data
@EqualsAndHashCode
@ToString
public class SecurityContext implements Serializable {

    @Getter(AccessLevel.NONE)
    private static final long SERIAL__VERSION_UID = 1L;

    private UUID userId;
    private UUID roleId;
    private String roleName;
    private UUID organizationId;
    private String token;
}