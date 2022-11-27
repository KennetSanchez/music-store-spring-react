package co.edu.icesi.stringsandwinds.utils;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum UltraPrivateSecretKey {
    ultraConfidentialSecretKey("s_w |allRightsReserved| we need a stupidly long secret since we are using hash256." +
            " I really hope this is large enough");
    private final String secret;
}
