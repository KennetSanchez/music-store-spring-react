package co.edu.icesi.stringsandwinds.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import java.util.List;
import java.util.UUID;

@Data
@Table(name = "USERS")
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    /* Intrinsic user fields */
    @Id
    @Type(type = "org.hibernate.type.UUIDCharType")
    private UUID userId;

    @NotEmpty
    private String firstName;

    @NotEmpty
    private String lastName;

    private String email;

    private String phoneNumber;

    private String address;

    private String hashedPassword;

    private UUID roleId;
}
