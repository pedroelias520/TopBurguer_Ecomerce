package com.example.TopBurguer.Model.ModelRepository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.example.TopBurguer.Model.Product;

public interface productRepository extends PagingAndSortingRepository<Product, Integer>{

	
}
