package co.edu.icesi.stringsandwinds.dto;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
public class LoginDTO {

    private String email;
    private String phoneNumber;

    @NotNull
    @NotEmpty
    private String password;

}