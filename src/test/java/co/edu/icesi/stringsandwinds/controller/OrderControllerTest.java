package co.edu.icesi.stringsandwinds.controller;

import co.edu.icesi.stringsandwinds.constant.Status;
import co.edu.icesi.stringsandwinds.dto.OrderDTO;
import co.edu.icesi.stringsandwinds.mapper.OrderMapper;
import co.edu.icesi.stringsandwinds.mapper.OrderMapperImpl;
import co.edu.icesi.stringsandwinds.model.Item;
import co.edu.icesi.stringsandwinds.model.Order;
import co.edu.icesi.stringsandwinds.service.OrderService;
import lombok.SneakyThrows;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class OrderControllerTest {
    private Ordercontroller orderController;
    private OrderService orderService;

    private UUID customerUUID;
    private UUID orderUUID;

    @BeforeEach
    void init() {
        orderService = mock(OrderService.class);
        OrderMapper orderMapper = new OrderMapperImpl();
        orderController = new Ordercontroller(orderMapper, orderService);
        customerUUID = UUID.randomUUID();
        orderUUID = UUID.randomUUID();
        when(orderService.createOrder(any())).thenReturn(new Order(orderUUID, customerUUID, 1200, Status.ORDERED));
    }

    @Test
    @SneakyThrows
    public void testController() {
        OrderDTO orderDTO = new OrderDTO(orderUUID, customerUUID, 1200, Status.ORDERED);
        assertEquals(orderDTO.getOrderId(), orderController.createOrder(orderDTO).getOrderId());
    }

    @Test
    public void testGetOrder() {
        when(orderService.getOrder(any())).thenReturn(new Order(orderUUID, customerUUID, 1200, Status.ORDERED));
        assertEquals(customerUUID, orderController.getOrder(orderUUID).getCostumerId());
    }

    @Test
    public void testGetOrders() {
        when(orderService.getOrders()).thenReturn(new ArrayList<Order>());
        assertTrue(orderController.getOrders().isEmpty());
    }
}
