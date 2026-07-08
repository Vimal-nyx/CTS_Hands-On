package com.cognizant.ormlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import com.cognizant.ormlearn.service.CountryService;
import com.cognizant.ormlearn.model.Country;
import java.util.List;

@SpringBootApplication
public class OrmLearnApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        countryService = context.getBean(CountryService.class);
        LOGGER.info("Inside main");
        
        try {
            testGetAllCountries();
            testAddCountry();
            testUpdateCountry();
            testDeleteCountry();
            testFindCountriesMatching();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start testGetAllCountries");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End testGetAllCountries");
    }
    
    private static void testAddCountry() throws Exception {
        LOGGER.info("Start testAddCountry");
        Country country = new Country();
        country.setCode("MM");
        country.setName("My Country");
        countryService.addCountry(country);
        Country found = countryService.findCountryByCode("MM");
        LOGGER.debug("Added country: {}", found);
        LOGGER.info("End testAddCountry");
    }
    
    private static void testUpdateCountry() throws Exception {
        LOGGER.info("Start testUpdateCountry");
        countryService.updateCountry("MM", "My Country Updated");
        Country found = countryService.findCountryByCode("MM");
        LOGGER.debug("Updated country: {}", found);
        LOGGER.info("End testUpdateCountry");
    }
    
    private static void testDeleteCountry() {
        LOGGER.info("Start testDeleteCountry");
        countryService.deleteCountry("MM");
        try {
            countryService.findCountryByCode("MM");
        } catch (Exception e) {
            LOGGER.debug("Country MM successfully deleted.");
        }
        LOGGER.info("End testDeleteCountry");
    }
    
    private static void testFindCountriesMatching() {
        LOGGER.info("Start testFindCountriesMatching");
        List<Country> list = countryService.findCountriesMatching("ia");
        LOGGER.debug("Countries matching 'ia': {}", list);
        LOGGER.info("End testFindCountriesMatching");
    }
}
