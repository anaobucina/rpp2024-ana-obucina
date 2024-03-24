package rpp_projekat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import rpp_projekat.model.Projekat;

public interface ProjekatRepository extends JpaRepository<Projekat, Integer>{
	
	List<Projekat> findByNazivContainingIgnoreCase(String naziv);
	
	List<Projekat> findByOznakaContainingIgnoreCase(String oznaka);

}
