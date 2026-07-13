package com.example.springlearn.controller;

import com.example.springlearn.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @Autowired
    @Qualifier("in")
    private Country countryIndia;

    @RequestMapping("/country")
    public Country getCountryIndia() {
        LOGGER.info("START");
        LOGGER.info("END");
        return countryIndia;
    }
}

