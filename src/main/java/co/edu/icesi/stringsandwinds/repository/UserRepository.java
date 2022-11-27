package co.edu.icesi.stringsandwinds.repository;


import co.edu.icesi.stringsandwinds.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserRepository extends CrudRepository<User, UUID> {
}