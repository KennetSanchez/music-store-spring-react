package co.edu.icesi.stringsandwinds.service.impl;

import co.edu.icesi.stringsandwinds.model.Item;
import co.edu.icesi.stringsandwinds.repository.ItemRepository;
import co.edu.icesi.stringsandwinds.service.ItemService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@AllArgsConstructor
@Service
public class ItemServiceImpl implements ItemService {

    public final ItemRepository itemRepository;

    @Override
    public Item getItem(UUID itemId) {
        Item item = itemRepository.findById(itemId).orElse(null);
        if(item != null){
            itemRepository.save(item);
        }
        return item;
    }

    @Override
    public Item createItem(Item itemDto) {
        return itemRepository.save(itemDto);
    }

    @Override
    public List<Item> getItems() {
        return StreamSupport.stream(itemRepository.findAll().spliterator(),false).collect(Collectors.toList());
    }
}