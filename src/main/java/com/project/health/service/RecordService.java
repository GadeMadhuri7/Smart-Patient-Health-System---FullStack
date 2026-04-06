package com.project.health.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.health.model.Record;
import com.project.health.repository.RecordRepository;

import java.util.List;

@Service
public class RecordService {

    @Autowired
    private RecordRepository repo;

    public Record addRecord(Record record) {
        return repo.save(record);
    }

    public List<Record> getRecords(int patientId) {
        return repo.findByPatientId(patientId);
    }
    public void deleteRecord(int id) {
    repo.deleteById(id);
}
}