package com.Student.Service;

import com.Student.Entity.Student;

import java.util.List;
import java.util.Optional;

public interface StudentService {
    Student create(Student student);
    Student getStudentById(Integer id);
    List<Student> getAll();
    void deleteStudent(Integer id);

    Student update(Student student);

    // Student updateStudent(Student student,Integer id);
}
