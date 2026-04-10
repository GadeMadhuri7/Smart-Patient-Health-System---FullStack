package com.project.health.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.health.model.Patient;
import com.project.health.repository.PatientRepository;

@Service
public class PatientService {

    @Autowired
    private PatientRepository repo;

    public Patient register(Patient p) {
        return repo.save(p);
    }

    public Patient login(String email, String password) {
        Patient p = repo.findByEmail(email);
        if (p != null && p.getPassword().equals(password)) {
            return p;
        }
        return null;
    }
}
//hello