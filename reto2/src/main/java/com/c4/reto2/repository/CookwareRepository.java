package com.c4.reto2.repository;


import com.c4.reto2.model.Cookware;
import com.c4.reto2.repository.crud.InterfaceCookware;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author USUARIO
 */
@Repository
public class CookwareRepository {
    @Autowired
    private InterfaceCookware repository;

    public List<Cookware> getAll() {
        return repository.findAll();
    }

    public Optional<Cookware> getClothe(String reference) {
        return repository.findById(reference);
    }
    public Cookware create(Cookware clothe) {
        return repository.save(clothe);
    }

    public void update(Cookware clothe) {
        repository.save(clothe);
    }
    
    public void delete(Cookware clothe) {
        repository.delete(clothe);
    }
}
