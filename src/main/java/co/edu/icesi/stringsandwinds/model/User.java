package co.edu.icesi.stringsandwinds.model;

import lombok.*;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.UUID;


@Data
@Table(name = "USERS")
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @Type(type="org.hibernate.type.UUIDCharType")
    private UUID id;

    private String email;

    @Type(type="org.hibernate.type.UUIDCharType")
    private UUID userRolId;

    private String address;

    private String phoneNumber;

    private String firstName;

    private String lastName;

    private String hashedPassword;

    @PrePersist
    public void generateId(){
        this.id = UUID.randomUUID();
    }

}