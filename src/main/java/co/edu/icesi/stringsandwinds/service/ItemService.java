package co.edu.icesi.stringsandwinds.service;

import co.edu.icesi.stringsandwinds.dto.ItemDTO;
import co.edu.icesi.stringsandwinds.model.Item;
import co.edu.icesi.stringsandwinds.model.User;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.UUID;

public interface ItemService {

        Item getItem(@PathVariable UUID itemId);

        Item createItem(@RequestBody Item itemDTO);

        List<Item> getItems();
}
