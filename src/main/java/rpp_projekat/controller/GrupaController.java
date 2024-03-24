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
import rpp_projekat.service.GrupaService;

@CrossOrigin
@RestController
public class GrupaController {
	
	@Autowired
	private GrupaService grupaService;
	
	@Autowired
	private JdbcTemplate jdbctemplate;
	
	@ApiOperation(value = "Returns list of all Grupas")
	@GetMapping("grupa")
	public ResponseEntity<List<Grupa>> getAll() {
		List<Grupa> grupas = grupaService.getAll();
	return new ResponseEntity<>(grupas, HttpStatus.OK);
	}
	
	@ApiOperation(value = "Returns Grupa with id that was forwarded as path variable.")
	@GetMapping("grupa/{id}")
	public ResponseEntity<Grupa> getOne(@PathVariable("id") Integer id) {
		if (grupaService.findById(id).isPresent()) {
			Optional<Grupa> grupaOpt = grupaService.findById(id);
	        return new ResponseEntity<>(grupaOpt.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}
	
	@ApiOperation(value = "Returns list of Grupas containing string that was forwarded as path variable in 'oznaka'.")
	@GetMapping("grupa/oznaka/{oznaka}")
	public ResponseEntity<Optional<Grupa>> getByOznaka(@PathVariable("oznaka") String oznaka) {
			Optional<Grupa> grupas = grupaService.findByOznakaContainingIgnoreCase(oznaka);
		return new ResponseEntity<>(grupas, HttpStatus.OK);	
	}
	
	@ApiOperation(value = "Adds new Grupa to database.")
	@PostMapping("grupa")
	public ResponseEntity<Grupa> addGrupa(@RequestBody Grupa grupa) {
		Grupa savedGrupa = grupaService.save(grupa);
	    URI location = URI.create("/grupa/" + savedGrupa.getId());
		return ResponseEntity.created(location).body(savedGrupa);
	}
	
	@ApiOperation(value = "Updates Grupa that has id that was forwarded as path variable with values forwarded in Request Body.")
	@PutMapping(value = "grupa/{id}")
	public ResponseEntity<Grupa> updateGrupa(@RequestBody Grupa grupa, @PathVariable("id") Integer id) {
		if (grupaService.existsById(id)) {
			grupa.setId(id);
			Grupa savedGrupa = grupaService.save(grupa);
			return ResponseEntity.ok().body(savedGrupa);
		}
	    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@ApiOperation(value = "Deletes Grupa with id that was forwarded as path variable.")
	@DeleteMapping("grupa/{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Integer id) {
		if (grupaService.existsById(id)) {
			grupaService.deleteById(id);
	        return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NOT_FOUND);
	}

}
