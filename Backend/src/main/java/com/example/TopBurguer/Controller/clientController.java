package com.example.TopBurguer.Controller;

import java.util.Optional;

import javax.validation.Valid;

import org.hibernate.annotations.ParamDef;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.TopBurguer.Model.Client;
import com.example.TopBurguer.Model.ModelRepository.clientRepository;

@RestController
@RequestMapping("/clients")
public class clientController {
	@Autowired
	private clientRepository clientRepo;
	
	
	@PostMapping
	@RequestMapping(method = {RequestMethod.PUT, RequestMethod.POST})
	public @ResponseBody Client newClient(@Valid Client client) {
		clientRepo.save(client);
		return client;
	}
	
	@GetMapping("/all")
	public Iterable<Client> getAllClient(){
		return clientRepo.findAll();
	}
	
	@DeleteMapping("/{id}")
	public void deleteClient(@PathVariable int id) {
		clientRepo.deleteById(id);
	}
} 
