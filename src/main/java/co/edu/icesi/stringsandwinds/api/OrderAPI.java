package co.edu.icesi.stringsandwinds.api;

import co.edu.icesi.stringsandwinds.dto.ItemDTO;
import co.edu.icesi.stringsandwinds.dto.OrderDTO;
import co.edu.icesi.stringsandwinds.dto.OrderToItemsDTO;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins ="http://localhost:3000")
@RequestMapping("/orders")
public interface OrderAPI {

        @GetMapping("/{orderId}")
        OrderDTO getOrder(@PathVariable UUID orderId);

        @PostMapping()
        OrderDTO createOrder(@RequestBody @Valid OrderDTO orderDTO);

        @GetMapping
        List<OrderDTO> getOrders();
}
