package com.example.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ImportResource;
import java.util.ArrayList;

@SpringBootApplication
@ImportResource("classpath:country.xml")
public class SpringLearnApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);
    private static ApplicationContext applicationContext;

    public static void main(String[] args) {
        applicationContext = SpringApplication.run(SpringLearnApplication.class, args);
        LOGGER.info("Inside main");
        displayCountries();
    }

    public static void displayCountries() {
        LOGGER.info("START");
        @SuppressWarnings("unchecked")
        ArrayList<Country> countries = applicationContext.getBean("countryList", ArrayList.class);
        LOGGER.debug("Country List: {}", countries);
        LOGGER.info("END");
    }
}

