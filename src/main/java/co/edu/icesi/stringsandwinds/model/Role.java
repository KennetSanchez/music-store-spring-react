package co.edu.icesi.stringsandwinds.model;

import co.edu.icesi.stringsandwinds.constant.Roles;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Collection;
import java.util.UUID;

@Data
@Table(name = "ROLES")
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Role {

    @Id
    @Type(type = "org.hibernate.type.UUIDCharType")
    @Column(name = "role_id", nullable = false)
    private UUID roleId;

    @Column(name = "role", nullable = false)
    @Enumerated(EnumType.STRING)
    private Roles role;

    @Column(name = "role_description", nullable = false)
    private String description;


}
