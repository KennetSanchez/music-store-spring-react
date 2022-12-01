package co.edu.icesi.stringsandwinds.model;

import co.edu.icesi.stringsandwinds.constant.Roles;
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
    @Type(type="org.hibernate.type.UUIDCharType")
    private UUID id;

    private String email;

    @Column(name ="user_role")
    @Enumerated(EnumType.STRING)
    private Roles role;

    private String address;

    private String phoneNumber;

    private String firstName;

    private String lastName;

    private String hashedPassword;
}