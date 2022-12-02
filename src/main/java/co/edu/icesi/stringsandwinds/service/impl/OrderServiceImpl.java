package co.edu.icesi.stringsandwinds.service.impl;

import co.edu.icesi.stringsandwinds.constant.Status;
import co.edu.icesi.stringsandwinds.constant.UserErrorCode;
import co.edu.icesi.stringsandwinds.error.exception.UserError;
import co.edu.icesi.stringsandwinds.error.exception.UserException;
import co.edu.icesi.stringsandwinds.model.Order;
import co.edu.icesi.stringsandwinds.model.User;
import co.edu.icesi.stringsandwinds.repository.ItemRepository;
import co.edu.icesi.stringsandwinds.repository.OrderRepository;
import co.edu.icesi.stringsandwinds.repository.UserRepository;
import co.edu.icesi.stringsandwinds.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;


@AllArgsConstructor
@Service
public class OrderServiceImpl implements OrderService {

    public final OrderRepository orderRepository;

    @Override
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Order getOrder(UUID orderId) {
        Order order = orderRepository.findById(orderId).orElse(null);
        if(order != null){
            return order;
        }
        throw new UserException(HttpStatus.NOT_FOUND,  new UserError(UserErrorCode.CODE_13, UserErrorCode.CODE_13.getMessage()));
    }

    @Override
    public List<Order> getOrders() {
        return null;
    }

    @Override
    public List<Order> getOrdersByUserId(UUID userId) {
        return StreamSupport.stream(orderRepository.findOrdersById(userId).spliterator(),false).collect(Collectors.toList());
    }


    @Override
    public Order cancelOrder(UUID orderId) {
        Order order = orderRepository.findById(orderId).orElse(null);
        if(order != null){
            order.setStatus(Status.CANCELED);
            return orderRepository.save(order);
        }
        throw new UserException(HttpStatus.NOT_FOUND,  new UserError(UserErrorCode.CODE_13, UserErrorCode.CODE_13.getMessage()));
    }
}
