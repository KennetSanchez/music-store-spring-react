package co.edu.icesi.stringsandwinds.dto;

import org.hibernate.annotations.Type;

import javax.persistence.Id;
import java.util.UUID;

public class ItemDTO {

    @Id
    @Type(type = "org.hibernate.type.UUIDCharType")
    private UUID itemId;

    private String name;

    private boolean includesShipping;

    private String description;

    private float basePrice;

    private float shippingPrice;
}
