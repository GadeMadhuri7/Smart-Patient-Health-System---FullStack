package com.project.health.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.project.health.model.Record;
import com.project.health.service.RecordService;

import java.util.List;

@RestController
@RequestMapping("/api/record")
@CrossOrigin
public class RecordController {

    @Autowired
    private RecordService service;

    @PostMapping("/add")
    public Record addRecord(@RequestBody Record record) {
        return service.addRecord(record);
    }

    @GetMapping("/{patientId}")
    public List<Record> getRecords(@PathVariable int patientId) {
        return service.getRecords(patientId);
    }
    @DeleteMapping("/delete/{id}")
public String deleteRecord(@PathVariable int id) {
    service.deleteRecord(id);
    return "Deleted Successfully";
}
@PutMapping("/update/{id}")
public Record updateRecord(@PathVariable int id, @RequestBody Record record) {
    record.setId(id);
    return service.addRecord(record);
}
}