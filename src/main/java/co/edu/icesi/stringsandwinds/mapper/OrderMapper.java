package co.edu.icesi.stringsandwinds.mapper;

import co.edu.icesi.stringsandwinds.dto.OrderDTO;
import co.edu.icesi.stringsandwinds.model.Order;

public interface OrderMapper {
    Order fromDTO(OrderDTO orderDTO);
    OrderDTO fromOrder(Order order);
}
