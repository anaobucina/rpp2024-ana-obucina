package rpp_projekat.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rpp_projekat.model.Smer;
import rpp_projekat.repository.SmerRepository;

@Service
public class SmerService {
	
	@Autowired
	private SmerRepository smerRepository;
	
	public List<Smer> getAll() {
		return smerRepository.findAll();
	}
	
	public Optional<Smer> findById(Integer id) {
		return smerRepository.findById(id);
	}
	
	public List<Smer> findByNazivContainingIgnoreCase(String naziv) {
		return smerRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	public List<Smer> findByOznakaContainingIgnoreCase(String oznaka) {
		return smerRepository.findByOznakaContainingIgnoreCase(oznaka);
	}
	
	public Smer save(Smer smer) {
		return smerRepository.save(smer);
	}
	
	public boolean existsById(Integer id) {
		return smerRepository.existsById(id);
	}
	
	public void deleteById(Integer id) {
		smerRepository.deleteById(id);
	}

}
