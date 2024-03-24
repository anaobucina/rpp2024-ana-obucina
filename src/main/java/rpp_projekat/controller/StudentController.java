package rpp_projekat.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;
import rpp_projekat.model.Grupa;
import rpp_projekat.model.Student;
import rpp_projekat.service.GrupaService;
import rpp_projekat.service.StudentService;

@CrossOrigin
@RestController
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	@Autowired
	private GrupaService grupaService;
	
	@Autowired
	private JdbcTemplate jdbctemplate;
	
	@ApiOperation(value = "Returns list of all Students")
	@GetMapping("student")
	public ResponseEntity<List<Student>> getAll() {
		List<Student> students = studentService.getAll();
	return new ResponseEntity<>(students, HttpStatus.OK);
	}
	
	@ApiOperation(value = "Returns Student with id that was forwarded as path variable.")
	@GetMapping("student/{id}")
	public ResponseEntity<Student> getOne(@PathVariable("id") Integer id) {
		if (studentService.findById(id).isPresent()) {
			Optional<Student> studentOpt = studentService.findById(id);
	        return new ResponseEntity<>(studentOpt.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}
	
	@ApiOperation(value = "Returns list of Students containing string that was forwarded as path variable in 'ime'.")
	@GetMapping("student/ime/{ime}")
	public ResponseEntity<List<Student>> getByIme(@PathVariable("ime") String ime) {
			List<Student> students = studentService.findByImeContainingIgnoreCase(ime);
		return new ResponseEntity<>(students, HttpStatus.OK);	
	}
	
	@ApiOperation(value = "Returns list of Students containing string that was forwarded as path variable in 'prezime'.")
	@GetMapping("student/prezime/{prezime}")
	public ResponseEntity<List<Student>> getByPrezime(@PathVariable("prezime") String prezime) {
			List<Student> students = studentService.findByPrezimeContainingIgnoreCase(prezime);
		return new ResponseEntity<>(students, HttpStatus.OK);	
	}
	
	@ApiOperation(value = "Returns list of Students containing string that was forwarded as path variable in 'brojIndeksa'.")
	@GetMapping("student/brojIndeksa/{brojIndeksa}")
	public ResponseEntity<List<Student>> getByBrojIndeksa(@PathVariable("brojIndeksa") String brojIndeksa) {
			List<Student> students = studentService.findByBrojIndeksaContainingIgnoreCase(brojIndeksa);
		return new ResponseEntity<>(students, HttpStatus.OK);	
	}
	
	
	
	
	
	@ApiOperation(value = "Returns list of all Students by Grupas 'oznaka' ")
	@GetMapping("student/grupa/{oznaka}")
	public ResponseEntity<List<Student>> getStudentsByGrupa(@PathVariable("oznaka") String oznaka) 
	{
		Optional<Grupa> g=grupaService.findByOznakaContainingIgnoreCase(oznaka);
	if(g.isPresent())
	{
		List<Student> b=studentService.findByGrupa(g.get());
		return new ResponseEntity<>(b,HttpStatus.OK);
	}
	else {
		return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
	}
		
	}

	@ApiOperation(value = "Adds new Student to database.")
	@PostMapping("student")
	public ResponseEntity<Student> addStudent(@RequestBody Student student) {
		//Student savedStudent = studentService.save(student);
	    //URI location = URI.create("/student/" + savedStudent.getId());
		//return ResponseEntity.created(location).body(savedStudent);
		if(!studentService.existsById(student.getGrupa().getId())) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		Student savedStudent = studentService.save(student);
		URI location = URI.create("/student/" + savedStudent.getId());
		return ResponseEntity.created(location).body(savedStudent);
	}
	
	@ApiOperation(value = "Updates Student that has id that was forwarded as path variable with values forwarded in Request Body.")
	@PutMapping(value = "student/{id}")
	public ResponseEntity<Student> updateStudent(@RequestBody Student student, @PathVariable("id") Integer id) {
		if (!studentService.existsById(id)) {
			//student.setId(id);
			//Student savedStudent = studentService.save(student);
			//return ResponseEntity.ok().body(savedStudent);
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		student.setId(id);
		Student savedStudent = studentService.save(student);
		return ResponseEntity.ok().body(savedStudent);
		//return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@ApiOperation(value = "Deletes Student with id that was forwarded as path variable.")
	@DeleteMapping("student/{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Integer id) {
		if (studentService.existsById(id)) {
			studentService.deleteById(id);
	        return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NOT_FOUND);
		
	}
	
	

}
