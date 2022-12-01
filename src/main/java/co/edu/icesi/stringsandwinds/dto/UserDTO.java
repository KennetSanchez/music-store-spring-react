package co.edu.icesi.stringsandwinds.dto;

import co.edu.icesi.stringsandwinds.constant.Roles;
import lombok.*;

import javax.persistence.Column;
import java.time.LocalDate;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private UUID id;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private String phoneNumber;

    private Roles role;

    private String address;

    private String firstName;

    private String lastName;

    private String password;

    private UUID userRolId;
}