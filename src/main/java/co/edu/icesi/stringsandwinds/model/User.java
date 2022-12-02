package co.edu.icesi.stringsandwinds.model;

import lombok.*;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.UUID;

@Data
@Table(name = "USERS")
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Type(type="org.hibernate.type.PostgresUUIDType")
    private UUID id;

    private String email;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    private String address;

    private String phoneNumber;

    private String firstName;

    private String lastName;

    private String hashedPassword;
}