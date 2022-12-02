package co.edu.icesi.stringsandwinds.dto;

import co.edu.icesi.stringsandwinds.model.Role;
import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private UUID id;

    @Column(unique = true)
    @Email
    @NotBlank
    @NotNull
    private String email;

    @Column(unique = true)
    @NotBlank
    @NotNull
    @Length(min = 10, max = 10)
    private String phoneNumber;

    private Role role;

    @NotNull
    @NotBlank
    private String address;

    @NotNull
    @NotBlank
    @Length(min = 3, max = 32)
    private String firstName;

    @NotNull
    @NotBlank
    @Length(min = 3, max = 32)
    private String lastName;

    @NotNull
    @NotEmpty
    private String password;

    @NotNull
    private UUID userRolId;
}