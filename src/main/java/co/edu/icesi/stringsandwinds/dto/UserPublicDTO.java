package co.edu.icesi.stringsandwinds.dto;

import co.edu.icesi.stringsandwinds.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserPublicDTO {

    private UUID id;

    @NotNull
    @NotBlank
    @Length(min = 3, max = 32)
    private String firstName;

    @NotNull
    @NotBlank
    @Length(min = 3, max = 32)
    private String lastName;

    @Email
    @NotBlank
    @NotNull
    private String email;

    @NotBlank
    @NotNull
    @Length(min = 10, max = 10)
    private String phoneNumber;

    @NotNull
    @NotBlank
    private String address;

    @NotNull
    private Role role;
}