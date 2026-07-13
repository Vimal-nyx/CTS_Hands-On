package com.example.springlearn.controller;
import com.example.springlearn.Country;
import com.example.springlearn.service.CountryService;
import com.example.springlearn.service.exception.CountryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@RestController
public class CountryController
{
    private final org.springframework.context.ApplicationContext context = new org.springframework.context.support.ClassPathXmlApplicationContext("country.xml");
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);
    @Autowired
    private CountryService countryService;
    @RequestMapping("/country")
    public Country getCountryIndia()
    {
        LOGGER.info("START");

        Country country = context.getBean("in", Country.class);
        LOGGER.info("END");
        return country;
    }
    @GetMapping("/countries")
    public List<Country> getAllCountries()
    {
        LOGGER.info("START");

        List<Country> countries = context.getBean("countryList", java.util.ArrayList.class);
        LOGGER.info("END");
        return countries;
    }
    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) throws CountryNotFoundException
    {
        LOGGER.info("START");
        Country country = countryService.getCountry(code);
        LOGGER.info("END");
        return country;
    }
}
