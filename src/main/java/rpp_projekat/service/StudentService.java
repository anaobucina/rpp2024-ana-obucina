package rpp_projekat.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rpp_projekat.model.Grupa;
import rpp_projekat.model.Student;
import rpp_projekat.repository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepository studentRepository;
	
	public List<Student> getAll() {
		return studentRepository.findAll();
	}
	
	public Optional<Student> findById(Integer id) {
		return studentRepository.findById(id);
	}
	
	public List<Student> findByImeContainingIgnoreCase(String ime) {
		return studentRepository.findByImeContainingIgnoreCase(ime);
	}
	
	public List<Student> findByPrezimeContainingIgnoreCase(String prezime) {
		return studentRepository.findByPrezimeContainingIgnoreCase(prezime);
	}
	
	public List<Student> findByBrojIndeksaContainingIgnoreCase(String brojIndeksa) {
		return studentRepository.findByBrojIndeksaContainingIgnoreCase(brojIndeksa);
	}
	
	public List<Student> findByGrupa(Grupa grupa){
		return studentRepository.findByGrupa(grupa);
	}
	public Student save(Student student) {
		return studentRepository.save(student);
	}
	
	public boolean existsById(Integer id) {
		return studentRepository.existsById(id);
	}
	
	public void deleteById(Integer id) {
		studentRepository.deleteById(id);
	}
	
}
