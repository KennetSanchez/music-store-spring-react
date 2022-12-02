package co.edu.icesi.stringsandwinds.repository;

import co.edu.icesi.stringsandwinds.model.Order;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface OrderRepository extends CrudRepository<Order, UUID> {

    @Query(value = "SELECT order FROM ORDERS WHERE order.costumer_id = :costumerId ", nativeQuery = true)
    List<Order> findOrdersById(UUID costumerId);
}
