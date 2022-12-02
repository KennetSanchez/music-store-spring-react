package co.edu.icesi.stringsandwinds.service;

import co.edu.icesi.stringsandwinds.model.User;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.UUID;

public interface UserService {

    User getUser(@PathVariable UUID userId);

    User createUser(@RequestBody User userDTO, UUID rolId);

    List<User> getUsers();
}