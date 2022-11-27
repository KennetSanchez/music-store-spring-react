package co.edu.icesi.stringsandwinds.utils;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum UltraPrivateSecretKey {
    ultraConfidentialSecretKey("s_w |allRightsReserved| ");
    private final String secret;
}
