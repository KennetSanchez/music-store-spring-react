package co.edu.icesi.stringsandwinds.api;

import co.edu.icesi.stringsandwinds.dto.ItemDTO;
import co.edu.icesi.stringsandwinds.dto.OrderToItemsDTO;
import co.edu.icesi.stringsandwinds.dto.UserDTO;
import co.edu.icesi.stringsandwinds.dto.UserPublicDTO;
import co.edu.icesi.stringsandwinds.model.User;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins ="http://localhost:3000")
@RequestMapping("/users")
public interface UserAPI {

    @GetMapping("/{userId}")
    UserDTO getUser(@PathVariable UUID userId);

    @PostMapping("/create-user")
    UserDTO createUser(@RequestBody @Valid UserDTO userDTO);

    @PostMapping("/add-item-to-order")
    ItemDTO addItemToOrder(@RequestBody OrderToItemsDTO orderToItemsDTO);

    @GetMapping
    List<UserPublicDTO> getUsers();
}