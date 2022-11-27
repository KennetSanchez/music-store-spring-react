package co.edu.icesi.stringsandwinds;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class MusicShopApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MusicShopApiApplication.class, args);
	}

}
