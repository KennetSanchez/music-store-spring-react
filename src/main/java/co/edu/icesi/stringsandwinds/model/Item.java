package co.edu.icesi.stringsandwinds.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.UUID;

@Data
@Table(name = "ITEMS")
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Item {

    @Id
    @Type(type = "org.hibernate.type.UUIDCharType")
    private UUID itemId;

    @NotEmpty
    private String name;

    @NotNull
    private boolean includesShipping;

    @NotEmpty
    private String description;

    @NotNull
    private float basePrice;

    private float shippingPrice;

    @PrePersist
    public void generateId(){this.itemId = UUID.randomUUID();}
}
