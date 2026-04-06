A full-stack web application built using Java 17, Spring Boot, React, and MySQL for managing patient medical records through RESTful APIs, designed to manage patient medical records digitally. It replaces traditional paper-based systems with a secure and efficient platform where users can register, log in, and manage their health data.
This system allows users to add, view, update, delete, and search medical records easily through a user-friendly interface.

**Backend (Spring Boot):**
1.Build the project using Maven:
# mvn clean install

2.Run the Spring Boot application:
# mvn spring-boot:run
Starts the backend server (default: http://localhost:8080)

**Frontend (React):**

1.Navigate to the frontend folder:
# cd frontend

2.Install required dependencies:
# npm install

3.Start the React application:
# npm start
Runs the frontend (default: http://localhost:3000)

A full-stack web application built using Java 17, Spring Boot, React, and MySQL for managing patient medical records through RESTful APIs.

**Tech Stack:**
Backend: Java 17, Spring Boot, Spring Web, Spring Data JPA
Frontend: React.js, JavaScript (ES6), HTML, CSS
Database: MySQL
Build Tool: Maven

**Project Structure:**

1.BACKEND

backend/
 ├── src/main/java/com/project/health/
 │     ├── controller/
 │     │     ├── PatientController.java
 │     │     └── RecordController.java
 │
 │     ├── service/
 │     │     ├── PatientService.java
 │     │     └── RecordService.java
 │
 │     ├── repository/
 │     │     ├── PatientRepository.java
 │     │     └── RecordRepository.java
 │
 │     ├── model/
 │     │     ├── Patient.java
 │     │     └── Record.java
 │
 │     └── HealthApplication.java
 │
 ├── src/main/resources/
 │     ├── application.properties
 │
 └── pom.xml

2.FRONTEND:
frontend/
 ├── src/
 │     ├── components/
 │     │     └── CommonLayout.js
 │
 │     ├── pages/
 │     │     ├── Register.js
 │     │     ├── AddRecord.js
 │     │     ├── ViewRecords.js
 │     │     └── Profile.js
 │
 │     ├── services/
 │     │     └── api.js
 │
 │     ├── images/
 │     │     └── background.jpg
 │
 │     ├── App.js
 │     └── index.js
 │
 ├── package.json

**Modules:**
Authentication (Register, Login)
Record Management (Add, View, Update, Delete)
Viewing Documents (Client-side filtering)
Profile

**REST APIs:**
POST /api/patient/register
POST /api/patient/login
POST /api/record/add
GET /api/record/{patientId}
PUT /api/record/update/{id}
DELETE /api/record/delete/{id}

**Database Tables:**
Patient(id, name, email, password, age, gender)
Record(id, patientId, disease, prescription, date)

**Flow:**

React → Axios → Controller → Service → Repository → MySQL → Response → UI




