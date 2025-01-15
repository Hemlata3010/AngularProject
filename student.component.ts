import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  isCreateStudent: boolean = true;
  student: Student = new Student();  

  constructor(
    private studentService: StudentService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeData = this.activatedRoute.snapshot.data['student'];
    if (routeData && routeData.id > 0) {
      this.isCreateStudent = false;
      this.student = { ...routeData };  
    } else {
      this.isCreateStudent = true;
      this.student = new Student();  
    }
  }
  saveStudent(studentForm: NgForm): void {
    if (this.isCreateStudent) {
      this.studentService.saveStudent(this.student).subscribe(
        (res: Student) => {
          console.log('Student created:', res);
          studentForm.reset();
          this.resetForm();  
          this.router.navigate(['/student-list']);
        },
        (err: HttpErrorResponse) => {
          console.error('Error saving student:', err);
        }
      );
    } else {
      this.studentService.updateStudent(this.student).subscribe(
        (res: Student) => {
          console.log('Student updated:', res);
          this.router.navigate(['/student-list']);
        },
        (err: HttpErrorResponse) => {
          console.error('Error updating student:', err);
        }
      );
    }
  }

  
 resetForm(): void {
 }

 }


