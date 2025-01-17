package com.Student.DAO;

import com.Student.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface StudentRepositoryDao extends JpaRepository<Student, Integer> {
    Student findByName(String name);

    List<Student> findBySchool(String school);

    Page<Student> findByCity(String city, Pageable pageable);
    @Query("SELECT s FROM Student s WHERE s.name = :name")
    Student findByNameUsingJPQL(String name);

    @Query(value = "SELECT * FROM students WHERE city = ?1", nativeQuery = true)
    List<Student> findByCityUsingNativeSQL(String city);
}
