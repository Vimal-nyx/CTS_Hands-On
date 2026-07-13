package com.example.jwtapp;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class JwtApplication
{
    private static final Logger LOGGER = LoggerFactory.getLogger(JwtApplication.class);
    public static void main(String[] args)
    {
        SpringApplication.run(JwtApplication.class, args);
        LOGGER.info("Inside main");
    }
}
