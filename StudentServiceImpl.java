package com.Student.Service;

 import com.Student.Entity.Student;
 import com.Student.Repository.StudentRepo;
 import com.Student.exceptions.ResourceNotFoundException;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Service;

 import java.util.List;

 @Service
 public class StudentServiceImpl implements StudentService {

     @Autowired
     private StudentRepo studentRepo;

     @Override
     public Student create(Student student) {
         return this.studentRepo.save(student);
     }

     @Override
     public Student getStudentById(Integer id) {
         return this.studentRepo.findById(id).orElseThrow(() ->
                 new ResourceNotFoundException("Student", "id", id));
     }


     @Override
     public List<Student> getAll() {
         return this.studentRepo.findAll();
     }


     @Override
     public void deleteStudent(Integer id) {
         Student student = this.studentRepo.findById(id)
                 .orElseThrow(() -> new ResourceNotFoundException("Student", "id", id));
         this.studentRepo.delete(student);
     }


     @Override
     public Student update(Student student) {
         this.studentRepo.findById(student.getId()).orElseThrow(() ->
                 new ResourceNotFoundException("Student", "id", student.getId()));
         return this.studentRepo.save(student);
     }
 }
