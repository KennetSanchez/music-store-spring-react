package co.edu.icesi.stringsandwinds.service.impl;

import co.edu.icesi.stringsandwinds.constant.UserErrorCode;
import co.edu.icesi.stringsandwinds.dto.LoginDTO;
import co.edu.icesi.stringsandwinds.dto.TokenDTO;
import co.edu.icesi.stringsandwinds.error.exception.UserError;
import co.edu.icesi.stringsandwinds.error.exception.UserException;
import co.edu.icesi.stringsandwinds.model.User;
import co.edu.icesi.stringsandwinds.repository.UserRepository;
import co.edu.icesi.stringsandwinds.service.LoginService;
import co.edu.icesi.stringsandwinds.utils.JWTParser;
import com.google.common.hash.Hashing;

import lombok.AllArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.StreamSupport;

@AllArgsConstructor
@Service
public class LoginServiceImpl implements LoginService {

    public final UserRepository repository;
    private final static long EXPIRATION_TOKEN_TIME = 1000000L;
    @Override
    public TokenDTO login(LoginDTO loginDTO) {
        User user = StreamSupport.stream(repository.findAll().spliterator(), false)
                .filter(currentUser -> currentUser.getEmail().equals(loginDTO.getEmail()))
                .findFirst()
                .orElseThrow();

        return authenticatePassword(user, loginDTO);
    }

    @SneakyThrows
    private TokenDTO authenticatePassword(User user, LoginDTO loginDTO) {
        String expectedHash = user.getHashedPassword();
        String requestHash  = Hashing.sha256().hashString(loginDTO.getPassword(), StandardCharsets.UTF_8).toString();
        if (requestHash.equals(expectedHash)) {
            Map<String, String> claims = new HashMap<>();
            claims.put("userId", user.getId().toString());
            return new TokenDTO(JWTParser.createJWT(user.getId().toString(), user.getFirstName(), user.getLastName(), claims, EXPIRATION_TOKEN_TIME));
        }
        throw new UserException(HttpStatus.ACCEPTED, new UserError(UserErrorCode.CODE_07, UserErrorCode.CODE_07.getMessage()));
    }
}