package com.project.health.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;//contains annotations like @RestController, @RequestMapping, @CrossOrigin, @PostMapping, @GetMapping, @DeleteMapping, @PutMapping

//controller communicating with service layer to process requests and return responses
import com.project.health.model.Patient;
import com.project.health.service.PatientService;

@RestController//handles http requests, this class respondes with json data(but not HTML)
@RequestMapping("/api/patient")
@CrossOrigin//allows frontend(React) to communicate with backend (springboot)without CORS issues
public class PatientController {

    @Autowired //used for dependency injenction, to connect layers.
    private PatientService service;

    @PostMapping("/register")//endpoint for new patient registration, it handles post request
    public Patient register(@RequestBody Patient p) {
        return service.register(p);
    }

    @PostMapping("/login")//endpoint for patient login
//request body converts json data from frontend to java objects
    public Patient login(@RequestBody Patient p) {
        return service.login(p.getEmail(), p.getPassword());
    }
}
