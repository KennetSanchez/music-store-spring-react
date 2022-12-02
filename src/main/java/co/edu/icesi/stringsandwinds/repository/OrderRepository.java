package co.edu.icesi.stringsandwinds.repository;

import co.edu.icesi.stringsandwinds.model.Item;
import co.edu.icesi.stringsandwinds.model.Order;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface OrderRepository extends CrudRepository<Order, UUID> {

    @Query(value = "SELECT order FROM ORDERS WHERE order.costumer_id = :costumerId ", nativeQuery = true)
    List<Order> findOrdersById(UUID costumerId);

    @Query(value = "INSERT INTO ORDER_X_ITEMS (order_id, item_id, quantity) VALUES (:orderId, :itemId, :itemQuantity)", nativeQuery = true)
    Item insertItemIntoOrder(UUID orderId, UUID itemId, int itemQuantity);
}
