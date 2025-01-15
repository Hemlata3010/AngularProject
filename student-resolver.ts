import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { StudentService } from "./student.service";
import { inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { Student } from "./student.model";

export const StudentResolver: ResolveFn<any> = 
    (route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
        studentService: StudentService = inject(StudentService)) :Observable<Student> => {


            const studentId = route.paramMap.get("studentId");

            if(studentId) {
                return studentService.getStudent(Number(studentId));
            } else {
                

                const student: Student = {
                    id: 0,
                    name: '',
                    school:'',
                    city: ''
                }

                return of(student);

            }

        }