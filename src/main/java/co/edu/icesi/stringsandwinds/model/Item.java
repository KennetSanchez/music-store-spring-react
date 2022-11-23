package co.edu.icesi.stringsandwinds.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Data
@Table(name = "ITEMS")
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Item {

    /* Intrinsic user fields */

    @Id
    @Type(type = "org.hibernate.type.UUIDCharType")
    private UUID itemId;

    private String name;

    private String description;

    private float basePrice;

    private float shippingPrice;
}
