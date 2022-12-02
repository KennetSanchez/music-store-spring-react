package co.edu.icesi.stringsandwinds.repository;

import co.edu.icesi.stringsandwinds.model.Permission;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface PermissionRepository extends CrudRepository<Permission, UUID> {

}