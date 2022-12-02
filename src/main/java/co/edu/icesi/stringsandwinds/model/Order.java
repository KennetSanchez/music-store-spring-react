package co.edu.icesi.stringsandwinds.model;

import co.edu.icesi.stringsandwinds.constant.Status;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
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
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Type(type="org.hibernate.type.PostgresUUIDType")
    private UUID orderId;
    
    @Type(type="org.hibernate.type.PostgresUUIDType")
    private UUID costumerId;

    private float total;

    @Enumerated(EnumType.STRING)
    private Status status;
}
