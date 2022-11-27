package co.edu.icesi.stringsandwinds.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Map;
import java.util.UUID;

@Data
@Table(name = "ORDERS")
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Order {

    /* Intrinsic user fields */

    @Id
    @Type(type = "org.hibernate.type.UUIDCharType")
    private UUID orderId;

    private float total;

    private String status;

    /* Relations */

    //private Map<UUID, Integer> orderItems;
}
