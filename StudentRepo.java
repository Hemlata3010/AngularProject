package com.Student.Repository;

import com.Student.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student,Integer> {

  //  void deleteById();
}
