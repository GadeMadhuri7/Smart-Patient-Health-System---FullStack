package com.project.health.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.health.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer> {
    Patient findByEmail(String email);
}
