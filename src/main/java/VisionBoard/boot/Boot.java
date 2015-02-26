package VisionBoard.boot;

import org.springframework.boot.SpringApplication;

import VisionBoard.config.DomainAndPersistenceConfig;

public class Boot {
	// le boot
	public static void main(String[] args) {
		SpringApplication.run(DomainAndPersistenceConfig.class, args);
	}
}
