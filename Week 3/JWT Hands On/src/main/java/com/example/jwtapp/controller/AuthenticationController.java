package com.example.jwtapp.controller;

import com.example.jwtapp.util.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {
    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START");
        LOGGER.debug("authHeader: {}", authHeader);    
        String user = getUser(authHeader);
        LOGGER.debug("User obtained: {}", user);
        String token = jwtUtil.generateToken(user);
        Map<String, String> map = new HashMap<>();
        map.put("token", token);
        LOGGER.info("END");
        return map;
    }

    private String getUser(String authHeader) {
        LOGGER.info("START getUser");
        String encodedCredentials = authHeader.substring(6);
        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);
        String decodedString = new String(decodedBytes);
        String user = decodedString.substring(0, decodedString.indexOf(':'));
        LOGGER.info("END getUser");
        return user;
    }
}

