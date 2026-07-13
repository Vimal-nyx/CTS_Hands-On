package com.example.springlearn.controller;
import com.example.springlearn.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class CountryController
{
    private final org.springframework.context.ApplicationContext context = new org.springframework.context.support.ClassPathXmlApplicationContext("country.xml");
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);
    @RequestMapping("/country")
    public Country getCountryIndia()
     {
        LOGGER.info("START");

        Country country = context.getBean("in", Country.class);
        LOGGER.info("END");
        return country;
    }
}
