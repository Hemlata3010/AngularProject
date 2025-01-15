import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  api = "http://localhost:8080"

  public saveStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(`${this.api}/student/create`, student);
  }

  public getStudents(): Observable<Student[]> {
      return this.httpClient.get<Student[]>(`${this.api}/student/all`);
  }

  public deleteStudent(id: number) {
    return this.httpClient.delete(`${this.api}/student/${id}`);
  }

  public getStudent(id: number) {
    return this.httpClient.get<Student>(`${this.api}/student/${id}`);
  }

  public updateStudent(student: Student) {
    return this.httpClient.put<Student>(`${this.api}/student/update`, student);
  }

}
