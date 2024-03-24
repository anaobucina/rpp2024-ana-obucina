package rpp_projekat.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import rpp_projekat.model.Grupa;
import rpp_projekat.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {
	
	List<Student> findByImeContainingIgnoreCase(String ime);
	
	List<Student> findByPrezimeContainingIgnoreCase(String prezime);
	
	List<Student> findByBrojIndeksaContainingIgnoreCase(String brojIndeksa);
	
	List<Student> findByGrupa(Grupa g);

}
