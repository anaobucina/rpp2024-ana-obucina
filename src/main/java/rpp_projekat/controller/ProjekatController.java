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
import rpp_projekat.model.Projekat;
import rpp_projekat.service.ProjekatService;

import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
public class ProjekatController {
	
	@Autowired
	private ProjekatService projekatService;
	
	@Autowired
	private JdbcTemplate jdbctemplate;
	
	@ApiOperation(value = "Returns list of all Projekats")
	@GetMapping("projekat")
	public ResponseEntity<List<Projekat>> getAll() {
		List<Projekat> projekats = projekatService.getAll();
	return new ResponseEntity<>(projekats, HttpStatus.OK);
	}
	
	@ApiOperation(value = "Returns Projekat with id that was forwarded as path variable.")
	@GetMapping("projekat/{id}")
	public ResponseEntity<Projekat> getOne(@PathVariable("id") Integer id) {
		if (projekatService.findById(id).isPresent()) {
			Optional<Projekat> projekatOpt = projekatService.findById(id);
	        return new ResponseEntity<>(projekatOpt.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}
	
	@ApiOperation(value = "Returns list of Projekats containing string that was forwarded as path variable in 'naziv'.")
	@GetMapping("projekat/naziv/{naziv}")
	public ResponseEntity<List<Projekat>> getByNaziv(@PathVariable("naziv") String naziv) {
			List<Projekat> projekats = projekatService.findByNazivContainingIgnoreCase(naziv);
		return new ResponseEntity<>(projekats, HttpStatus.OK);	
	}
	
	@ApiOperation(value = "Returns list of Projekats containing string that was forwarded as path variable in 'oznaka'.")
	@GetMapping("projekat/oznaka/{oznaka}")
	public ResponseEntity<List<Projekat>> getByOznaka(@PathVariable("oznaka") String oznaka) {
			List<Projekat> projekats = projekatService.findByOznakaContainingIgnoreCase(oznaka);
		return new ResponseEntity<>(projekats, HttpStatus.OK);	
	}
	
	@ApiOperation(value = "Adds new Projekat to database.")
	@PostMapping("projekat")
	public ResponseEntity<Projekat> addProjekat(@RequestBody Projekat projekat) {
		Projekat savedProjekat = projekatService.save(projekat);
	    URI location = URI.create("/projekat/" + savedProjekat.getId());
		return ResponseEntity.created(location).body(savedProjekat);
	}
	
	@ApiOperation(value = "Updates Projekat that has id that was forwarded as path variable with values forwarded in Request Body.")
	@PutMapping(value = "projekat/{id}")
	public ResponseEntity<Projekat> updateProjekat(@RequestBody Projekat projekat, @PathVariable("id") Integer id) {
		if (projekatService.existsById(id)) {
			projekat.setId(id);
			Projekat savedProjekat = projekatService.save(projekat);
			return ResponseEntity.ok().body(savedProjekat);
		}
	    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@ApiOperation(value = "Deletes Projekat with id that was forwarded as path variable.")
	@DeleteMapping("projekat/{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Integer id) {
		if (projekatService.existsById(id)) {
			projekatService.deleteById(id);
	        return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NOT_FOUND);
	}

}
