package co.edu.icesi.stringsandwinds.dto;

import co.edu.icesi.stringsandwinds.constant.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.Min;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Type(type="org.hibernate.type.PostgresUUIDType")
    private UUID orderId;

    @Id
    @Type(type="org.hibernate.type.PostgresUUIDType")
    private UUID costumerId;

    @Min(value = 0)
    private float total;

    @Enumerated(EnumType.STRING)
    private Status status;
}
