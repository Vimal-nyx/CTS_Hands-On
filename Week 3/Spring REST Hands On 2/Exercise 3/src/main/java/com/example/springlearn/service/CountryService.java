package com.example.springlearn.service;

import com.example.springlearn.Country;
import com.example.springlearn.service.exception.CountryNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CountryService {
    @Autowired
    @Qualifier("countryList")
    private List<Country> countries;

    public Country getCountry(String code) throws CountryNotFoundException {
        return countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new CountryNotFoundException("Country not found"));
    }
}

