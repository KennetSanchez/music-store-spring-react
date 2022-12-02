package co.edu.icesi.stringsandwinds.controller;

import co.edu.icesi.stringsandwinds.api.ItemAPI;
import co.edu.icesi.stringsandwinds.api.OrderAPI;
import co.edu.icesi.stringsandwinds.dto.OrderDTO;
import co.edu.icesi.stringsandwinds.mapper.OrderMapper;
import co.edu.icesi.stringsandwinds.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
public class Ordercontroller implements OrderAPI {

    public final OrderMapper orderMapper;
    public final OrderService orderService;


    @Override
    public OrderDTO getOrder(UUID orderId) {
        return orderMapper.fromOrder(orderService.getOrder(orderId));
    }

    @Override
    public OrderDTO createOrder(OrderDTO orderDTO) {
        return orderMapper.fromOrder(orderService.createOrder(orderMapper.fromDTO(orderDTO)));
    }

    @Override
    public List<OrderDTO> getOrders() {
        return orderService.getOrders().stream().map(orderMapper::fromOrder).collect(Collectors.toList());
    }
}
