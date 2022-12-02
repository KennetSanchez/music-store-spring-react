package co.edu.icesi.stringsandwinds.service;

import co.edu.icesi.stringsandwinds.model.Order;

import java.util.List;
import java.util.UUID;

public interface OrderService {

    Order createOrder(Order order);

    Order getOrder(UUID orderId);

    List<Order> getOrders();

    List<Order> getOrdersByUserId(UUID userId);

    Order cancelOrder(UUID orderId);
}
