package com.example.springlearn;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import java.util.ArrayList;
@SpringBootApplication
public class SpringLearnApplication
{
    private static final org.springframework.context.ApplicationContext CONTEXT = new org.springframework.context.support.ClassPathXmlApplicationContext("country.xml");
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);
    public static void main(String[] args)
    {
        SpringApplication.run(SpringLearnApplication.class, args);
        LOGGER.info("Inside main");

        displayCountries();
    }
    public static void displayCountries()
    {
        LOGGER.info("START");

        ArrayList<Country> countries = CONTEXT.getBean("countryList", ArrayList.class);
        LOGGER.debug("Country List: {}", countries);
        LOGGER.info("END");
    }
}
