package co.edu.icesi.stringsandwinds.constant;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum UserErrorCode {

    CODE_00("Restart your pc, we couldn't track the error."),
    CODE_01("The password doesn't fulfill the character diversity"),
    CODE_02("The email doesn't belong to the expected domain."),
    CODE_03("The phone doesn't follows the expected pattern."),
    CODE_04("The name can take only letters."),
    CODE_05("The last name can take only letters."),
    CODE_06("The email and phone number are not repeatable fields. Try with another value"),
    CODE_07("The password it's not the expected one. Try again"),
    CODE_08("Unauthorized. In order to create new users you need to be logged."),
    CODE_09("Unauthorized. Due to security reasons, you can only get the information of yourself"),
    CODE_10("The user must have at least one contact way (email or phone)"),
    CODE_12("Only administrators can publish items, try with an administrator account."),

    CODE_11("User not found");

    private final String message;
}