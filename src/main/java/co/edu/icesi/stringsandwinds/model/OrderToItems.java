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
@Table(name = "ORDERS_TO_ITEMS")
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderToItems {

    @Id
    @Type(type = "org.hibernate.type.UUIDCharType")
    private UUID orderId;

    @Id
    @Type(type = "org.hibernate.type.UUIDCharType")
    private UUID itemId;

    private int quantity;
}
