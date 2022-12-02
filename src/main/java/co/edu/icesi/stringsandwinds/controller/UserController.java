package co.edu.icesi.stringsandwinds.controller;

import co.edu.icesi.stringsandwinds.api.UserAPI;
import co.edu.icesi.stringsandwinds.constant.UserErrorCode;
import co.edu.icesi.stringsandwinds.dto.UserDTO;
import co.edu.icesi.stringsandwinds.dto.UserPublicDTO;
import co.edu.icesi.stringsandwinds.error.exception.UserError;
import co.edu.icesi.stringsandwinds.error.exception.UserException;
import co.edu.icesi.stringsandwinds.mapper.UserMapper;
import co.edu.icesi.stringsandwinds.service.UserService;
import com.google.common.hash.Hashing;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
public class UserController implements UserAPI {

    public final UserService userService;
    public final UserMapper userMapper;
    private final UUID DEFAULT_ROLE = UUID.fromString("0e02ed53-f5e2-4f7a-bd86-8aadcadeb4eb");

    @Override
    public UserDTO getUser(UUID userId) {
        return userMapper.fromUser(userService.getUser(userId));
    }

    @Override
    public UserDTO createUser(@Valid UserDTO userDTO) {
        if(hasAtLeastOneContactWay(userDTO.getEmail(), userDTO.getPhoneNumber())){
            userDTO.setPassword(Hashing.sha256().hashString(userDTO.getPassword(), StandardCharsets.UTF_8).toString());
            return userMapper.fromUser(userService.createUser(userMapper.fromDTO(userDTO), DEFAULT_ROLE));
        }
        throw new UserException(HttpStatus.BAD_REQUEST, new UserError(UserErrorCode.CODE_10, UserErrorCode.CODE_10.getMessage()));
    }

    @Override
    public List<UserPublicDTO> getUsers() {
        return userService.getUsers().stream().map(userMapper::fromPublicUser).collect(Collectors.toList());
    }


    public boolean hasAtLeastOneContactWay(String email, String number){
        return ((email != null) && !email.isBlank()) || ((number != null) && !number.isBlank() );
    }
}