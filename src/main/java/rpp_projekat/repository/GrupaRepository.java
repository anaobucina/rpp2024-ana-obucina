package rpp_projekat.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import rpp_projekat.model.Grupa;

public interface GrupaRepository extends JpaRepository<Grupa, Integer>{
	
	Optional<Grupa> findByOznakaContainingIgnoreCase(String oznaka);

}
