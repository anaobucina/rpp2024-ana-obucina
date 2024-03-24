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
import rpp_projekat.model.Smer;
import rpp_projekat.service.GrupaService;
import rpp_projekat.service.SmerService;

import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
public class SmerController {
	
	@Autowired
	private SmerService smerService;
	
	@Autowired
	private JdbcTemplate jdbctemplate;
	
	@ApiOperation(value = "Returns list of all Smers")
	@GetMapping("smer")
	public ResponseEntity<List<Smer>> getAll() {
		List<Smer> smers = smerService.getAll();
	return new ResponseEntity<>(smers, HttpStatus.OK);
	}
	
	@ApiOperation(value = "Returns Smer with id that was forwarded as path variable.")
	@GetMapping("smer/{id}")
	public ResponseEntity<Smer> getOne(@PathVariable("id") Integer id) {
		if (smerService.findById(id).isPresent()) {
			Optional<Smer> smerOpt = smerService.findById(id);
	        return new ResponseEntity<>(smerOpt.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}
	
	@ApiOperation(value = "Returns list of Smers containing string that was forwarded as path variable in 'naziv'.")
	@GetMapping("smer/naziv/{naziv}")
	public ResponseEntity<List<Smer>> getByNaziv(@PathVariable("naziv") String naziv) {
			List<Smer> smers = smerService.findByNazivContainingIgnoreCase(naziv);
		return new ResponseEntity<>(smers, HttpStatus.OK);	
	}
	
	@ApiOperation(value = "Returns list of Smers containing string that was forwarded as path variable in 'oznaka'.")
	@GetMapping("smer/oznaka/{oznaka}")
	public ResponseEntity<List<Smer>> getByOznaka(@PathVariable("oznaka") String oznaka) {
			List<Smer> smers = smerService.findByOznakaContainingIgnoreCase(oznaka);
		return new ResponseEntity<>(smers, HttpStatus.OK);	
	}
	
	@ApiOperation(value = "Adds new Smer to database.")
	@PostMapping("smer")
	public ResponseEntity<Smer> addSmer(@RequestBody Smer smer) {
		Smer savedSmer = smerService.save(smer);
	    URI location = URI.create("/smer/" + savedSmer.getId());
		return ResponseEntity.created(location).body(savedSmer);
	}
	
	@ApiOperation(value = "Updates Smer that has id that was forwarded as path variable with values forwarded in Request Body.")
	@PutMapping(value = "smer/{id}")
	public ResponseEntity<Smer> updateSmer(@RequestBody Smer smer, @PathVariable("id") Integer id) {
		if (smerService.existsById(id)) {
			smer.setId(id);
			Smer savedSmer = smerService.save(smer);
			return ResponseEntity.ok().body(savedSmer);
		}
	    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@ApiOperation(value = "Deletes Smer with id that was forwarded as path variable.")
	@DeleteMapping("smer/{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Integer id) {
		if (smerService.existsById(id)) {
			smerService.deleteById(id);
	        return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NOT_FOUND);
	}

}
