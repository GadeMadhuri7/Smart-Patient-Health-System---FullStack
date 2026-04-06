package com.project.health.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.health.model.Record;
import java.util.List;

public interface RecordRepository extends JpaRepository<Record, Integer> {
    List<Record> findByPatientId(int patientId);
}