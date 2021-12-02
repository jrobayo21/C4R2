package com.c4.reto2.repository.crud;


import com.c4.reto2.model.User;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * * @author Jhon Rob
 */
public interface InterfaceUser extends MongoRepository<User, Integer> {
     Optional<User> findByEmail(String email);
    Optional<User> findByEmailAndPassword(String email,String password);
}
