package co.edu.icesi.stringsandwinds.api;

import co.edu.icesi.stringsandwinds.dto.ItemDTO;
import co.edu.icesi.stringsandwinds.dto.UserDTO;
import co.edu.icesi.stringsandwinds.dto.UserPublicDTO;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins ="http://localhost:3000")
@RequestMapping("/items")
public interface ItemAPI {

    @GetMapping("/{itemId}")
    ItemDTO getItem(@PathVariable UUID itemId);

    @PostMapping()
    ItemDTO createItem(@RequestBody @Valid ItemDTO itemDTO);

    @GetMapping
    List<ItemDTO> getItems();
}