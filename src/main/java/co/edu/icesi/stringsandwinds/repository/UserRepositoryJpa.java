package co.edu.icesi.stringsandwinds.repository;

import co.edu.icesi.stringsandwinds.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepositoryJpa extends JpaRepository<User, String> {
    @Query("SELECT user FROM User user WHERE user.email = :email")
    User findByEmail(String email);
}
