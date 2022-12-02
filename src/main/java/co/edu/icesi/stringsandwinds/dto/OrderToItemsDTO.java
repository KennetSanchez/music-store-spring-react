package co.edu.icesi.stringsandwinds.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.validation.constraints.Min;
import java.io.Serializable;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderToItemsDTO{

    @Type(type = "org.hibernate.type.UUIDCharType")
    private UUID orderId;

    @Type(type = "org.hibernate.type.UUIDCharType")
    private UUID itemId;

    @Min(value = 1)
    private int quantity;
}
