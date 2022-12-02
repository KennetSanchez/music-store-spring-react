package co.edu.icesi.stringsandwinds.controller;

import co.edu.icesi.stringsandwinds.dto.ItemDTO;
import co.edu.icesi.stringsandwinds.mapper.ItemMapper;
import co.edu.icesi.stringsandwinds.mapper.ItemMapperImpl;
import co.edu.icesi.stringsandwinds.model.Item;
import co.edu.icesi.stringsandwinds.service.ItemService;
import lombok.SneakyThrows;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class ItemControllerTest {

    private ItemController itemController;
    private ItemService itemService;

    @BeforeEach
    void init() {
        itemService = mock(ItemService.class);
        ItemMapper itemMapper = new ItemMapperImpl();
        itemController = new ItemController(itemService, itemMapper);

        when(itemService.createItem(any())).thenReturn(new Item());
    }

    @Test
    @SneakyThrows
    public void testController() {
        ItemDTO itemDTO = new ItemDTO(null,"Mock Item", true, "Mock description", 600, 0);
        assertEquals(itemDTO.getItemId(), itemController.createItem(itemDTO).getItemId());
    }

    @Test
    public void testGetItem() {
        when(itemService.getItem(any())).thenReturn(new Item(null, "Mock Item", true, "Mock description", 600, 0));
        assertEquals("Mock Item", itemController.getItem(null).getName());
    }

    @Test
    public void testGetItems() {
        when(itemService.getItems()).thenReturn(new ArrayList<Item>());
        assertTrue(itemController.getItems().isEmpty());
    }
}
