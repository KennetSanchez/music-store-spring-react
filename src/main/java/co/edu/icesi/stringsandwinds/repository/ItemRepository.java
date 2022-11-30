package co.edu.icesi.stringsandwinds.repository;

import co.edu.icesi.stringsandwinds.model.Item;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface ItemRepository extends CrudRepository<Item, UUID> {
}
