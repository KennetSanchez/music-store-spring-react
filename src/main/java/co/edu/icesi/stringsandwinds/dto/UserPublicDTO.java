package co.edu.icesi.stringsandwinds.dto;

import co.edu.icesi.stringsandwinds.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserPublicDTO {

    private UUID id;

    private String firstName;

    private String lastName;

    private String email;

    private String phoneNumber;

    private String address;

    private Role role;
}