package com.example.TopBurguer.Controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.TopBurguer.Model.Product;
import com.example.TopBurguer.Model.ModelRepository.productRepository;

@RestController
@CrossOrigin
@RequestMapping("/products")
public class productController {

	@Autowired
	private productRepository productRepo;
	
	@PostMapping
	@RequestMapping(method = {RequestMethod.POST, RequestMethod.PUT})
	public @ResponseBody Product newProduct(@Valid Product product) {
		productRepo.save(product);
		return product;		
	}
	
	@GetMapping("all")
	public Iterable<Product> getAllProduct(){
		return productRepo.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<Product> getProductById(@PathVariable int id){
		return productRepo.findById(id);
	}
	
	@DeleteMapping("/{id}")
	public void deleteProduct(@PathVariable int id){
		productRepo.deleteById(id);
	}
	
}
