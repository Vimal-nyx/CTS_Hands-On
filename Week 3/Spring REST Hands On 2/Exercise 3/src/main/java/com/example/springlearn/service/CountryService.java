package com.example.springlearn.service;
import com.example.springlearn.Country;
import com.example.springlearn.service.exception.CountryNotFoundException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;
@Service
public class CountryService
 {
    private final org.springframework.context.ApplicationContext context = new org.springframework.context.support.ClassPathXmlApplicationContext("country.xml");
    public Country getCountry(String code) throws CountryNotFoundException
    {

        List<Country> countries = context.getBean("countryList", ArrayList.class);
        return countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new CountryNotFoundException("Country not found"));
    }
}
