package co.edu.icesi.stringsandwinds.controller;


import co.edu.icesi.stringsandwinds.api.ItemAPI;
import co.edu.icesi.stringsandwinds.dto.ItemDTO;

import co.edu.icesi.stringsandwinds.mapper.ItemMapper;
import co.edu.icesi.stringsandwinds.service.ItemService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
public class ItemController implements ItemAPI {

    public final ItemService itemService;
    public final ItemMapper itemMapper;

    @Override
    public ItemDTO getItem(UUID itemId) {
        return itemMapper.fromItem(itemService.getItem(itemId));
    }

    @Override
    public ItemDTO createItem(@Valid ItemDTO itemDTO) {
            return itemMapper.fromItem(itemService.createItem(itemMapper.fromDTO(itemDTO)));
    }

    @Override
    public List<ItemDTO> getItems() {
        return itemService.getItems().stream().map(itemMapper::fromItem).collect(Collectors.toList());
    }
}