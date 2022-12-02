package co.edu.icesi.stringsandwinds.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Map;
import java.util.UUID;

@Data
@Table(name = "ORDERS")
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Order  implements Serializable {

    @Id
    @Type(type="org.hibernate.type.PostgresUUIDType")
    private UUID orderId;

    @Id
    private UUID costumerId;

    private float total;

    private String status;
}
