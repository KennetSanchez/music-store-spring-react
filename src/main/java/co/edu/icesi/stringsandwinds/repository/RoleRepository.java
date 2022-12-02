package co.edu.icesi.stringsandwinds.repository;

import co.edu.icesi.stringsandwinds.model.Role;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface RoleRepository extends CrudRepository<Role, UUID> {

}
