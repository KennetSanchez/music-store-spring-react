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
@Table(name = "PERMISSIONS")
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Permission {

    /* Intrinsic user fields */

    @Id
    @Type(type = "org.hibernate.type.UUIDCharType")
    private UUID permissionId;

    private String URI;

    private String key;
}
