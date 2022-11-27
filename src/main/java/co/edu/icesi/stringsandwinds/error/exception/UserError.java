package co.edu.icesi.stringsandwinds.error.exception;

import co.edu.icesi.stringsandwinds.constant.UserErrorCode;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserError {
    private UserErrorCode code;
    private String message;
}