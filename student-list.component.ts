import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  dataSource: Student[] = [];

  displayedColumns: string[] = ['id', 'name', 'school', 'city', 'edit', 'delete'];

  constructor(private studentService: StudentService,
    private router: Router) {
    this.getStudentList();
  }

  ngOnInit(): void {
    
  }
  updateStudent(id: number): void {
    this.router.navigate(['/student',{studentId:id}]);
    //this.router.navigate(['/student', id]);  
  }

  deleteStudent(id: number): void {
    console.log(id);
    this.studentService.deleteStudent(id).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.getStudentList();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    );
  }

  getStudentList(): void {
    this.studentService.getStudents().subscribe(
      {
        next: (res: Student[]) => {
          this.dataSource = res;
        },
        error: (err: HttpErrorResponse)=> {
          console.log(err);
        }
      }
    );
  }

}
