package com.example.TopBurguer;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Objects;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.auth.oauth2.GoogleCredentials;


@SpringBootApplication
public class TopBurguerApplication {

	public static void main(String[] args) throws IOException{
					
		SpringApplication.run(TopBurguerApplication.class, args);
	}

}
