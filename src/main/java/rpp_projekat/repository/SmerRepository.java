package rpp_projekat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import rpp_projekat.model.Smer;

public interface SmerRepository extends JpaRepository<Smer, Integer> {
	
	List<Smer> findByNazivContainingIgnoreCase(String naziv);
	
	List<Smer> findByOznakaContainingIgnoreCase(String oznaka);

}
