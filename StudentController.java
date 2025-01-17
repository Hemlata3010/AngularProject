package com.Student.Controller;

import com.Student.Entity.Student;
import com.Student.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    //save student
    @PostMapping("/create")
    public ResponseEntity<Student> createStudent(@RequestBody Student student){
        return ResponseEntity.ok(this.studentService.create(student));
    }

    // get single user
    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable("id") Integer id){
        return ResponseEntity.ok(this.studentService.getStudentById(id));
    }

    // get all user

    @GetMapping("/all")
    public List<Student> getAllStudent(){
        List<Student> all = this.studentService.getAll();
        return all;
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable("id") Integer id){
        this.studentService.deleteStudent(id);
    }
    // update student
    @PutMapping("/update")
    public ResponseEntity<Student> updateStudent(@RequestBody Student student) {
        Student updatedStudent = studentService.update(student);
        return ResponseEntity.ok(updatedStudent);
    }

}
