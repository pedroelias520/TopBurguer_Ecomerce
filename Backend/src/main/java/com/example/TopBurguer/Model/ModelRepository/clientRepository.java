package com.example.TopBurguer.Model.ModelRepository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.example.TopBurguer.Model.Client;


public interface clientRepository extends PagingAndSortingRepository<Client, Integer>{
	
	
}
