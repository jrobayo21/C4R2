package com.c4.reto2.repository.crud;



import com.c4.reto2.model.Cookware;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * * @author Jhon Rob
 */
public interface InterfaceCookware extends MongoRepository<Cookware, String> {
    
}
