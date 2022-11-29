package co.edu.icesi.stringsandwinds.mapper;

import co.edu.icesi.stringsandwinds.dto.UserDTO;
import co.edu.icesi.stringsandwinds.dto.UserPublicDTO;
import co.edu.icesi.stringsandwinds.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {


    @Mapping(source = "password", target = "hashedPassword")
    User fromDTO(UserDTO userDTO);

    @Mapping(source = "hashedPassword", target = "password")
    UserDTO fromUser(User user);

    UserPublicDTO fromPublicUser(User user);
}