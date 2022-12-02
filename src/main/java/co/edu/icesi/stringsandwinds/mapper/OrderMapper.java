package co.edu.icesi.stringsandwinds.mapper;

import co.edu.icesi.stringsandwinds.dto.OrderDTO;
import co.edu.icesi.stringsandwinds.model.Order;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface OrderMapper {
    Order fromDTO(OrderDTO orderDTO);
    OrderDTO fromOrder(Order order);
}
