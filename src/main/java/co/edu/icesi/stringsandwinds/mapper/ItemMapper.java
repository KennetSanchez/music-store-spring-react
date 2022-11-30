package co.edu.icesi.stringsandwinds.mapper;

import co.edu.icesi.stringsandwinds.dto.ItemDTO;
import co.edu.icesi.stringsandwinds.model.Item;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ItemMapper {

    Item fromDTO(ItemDTO itemDTO);

    ItemDTO fromItem(Item item);
}
