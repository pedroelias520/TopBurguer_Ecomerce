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
		ClassLoader classloader = TopBurguerApplication.class.getClassLoader();
		File file = new File(Objects.requireNonNull(classloader.getResource("topburguerapp-firebase.json")).getFile());
		
		FileInputStream serviceAccount = new FileInputStream(file.getAbsolutePath());
		
		FirebaseOptions options = new FirebaseOptions.Builder()
			.setCredentials(GoogleCredentials.fromStream(serviceAccount))
			.setDatabaseUrl("https://topburguerapp-default-rtdb.firebaseio.com")
			.build();
		
		
		if(FirebaseApp.getApps().size() < 0) {
			FirebaseApp.initializeApp(options);
			System.out.println(FirebaseApp.DEFAULT_APP_NAME);
		}
					
		SpringApplication.run(TopBurguerApplication.class, args);
	}

}
