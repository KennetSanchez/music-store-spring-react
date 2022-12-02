package co.edu.icesi.stringsandwinds.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemDTO {

    @Id
    @Type(type = "org.hibernate.type.UUIDCharType")
    private UUID itemId;

    @NotEmpty
    @NotNull
    @Length(min = 1, max = 156)
    private String name;

    @NotNull
    private boolean includesShipping;

    @NotNull
    @NotEmpty
    private String description;

    @NotNull
    @Min(value = 0)
    private float basePrice;

    @NotNull
    @Min(value = 0)
    private float shippingPrice;

    @PrePersist
    private void setId(){this.itemId = UUID.randomUUID();}
}
