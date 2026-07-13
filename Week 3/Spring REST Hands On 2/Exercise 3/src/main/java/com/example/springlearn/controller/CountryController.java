package com.example.springlearn.controller;

import com.example.springlearn.Country;
import com.example.springlearn.service.CountryService;
import com.example.springlearn.service.exception.CountryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class CountryController {
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @Autowired
    private CountryService countryService;

    @Autowired
    @Qualifier("in")
    private Country countryIndia;

    @Autowired
    @Qualifier("countryList")
    private List<Country> countryList;

    @RequestMapping("/country")
    public Country getCountryIndia() {
        LOGGER.info("START");
        LOGGER.info("END");
        return countryIndia;
    }

    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        LOGGER.info("START");
        LOGGER.info("END");
        return countryList;
    }

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) throws CountryNotFoundException {
        LOGGER.info("START");
        Country country = countryService.getCountry(code);
        LOGGER.info("END");
        return country;
    }
}

