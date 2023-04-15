DROP SCHEMA IF EXISTS leetcode;
CREATE SCHEMA leetcode;
USE leetcode;

CREATE TABLE IF NOT EXISTS Patients (patient_id INT, patient_name VARCHAR(30), conditions VARCHAR(100));
