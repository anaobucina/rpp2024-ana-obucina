import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { Student } from "../model/student.model";

@Injectable({
    providedIn: 'root'
  })
  export class StudentService {
    constructor(private httpClient:HttpClient){}

    private readonly API_URL = 'http://localhost:8082/student/';
    private readonly API_URL_OZNAKA = 'http://localhost:8082/student/grupa/';
    dataChange: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);

    public getAllStudents(): Observable<Student[]> {
        this.httpClient.get<Student[]>(this.API_URL).subscribe({
          next: (data) => {
            this.dataChange.next(data);
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
          }}
        );
        return this.dataChange.asObservable();
      }

      public getStudent(oznaka:string): Observable<Student[]> {
        this.httpClient.get<Student[]>(this.API_URL_OZNAKA + oznaka).subscribe({
          next: (data) => {
            this.dataChange.next(data);
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
          }}
        );
        return this.dataChange.asObservable();
      }


      public addStudent(student:Student): void {
        this.httpClient.post(this.API_URL,student).subscribe();
       }
    
       public updateStudent(student:Student): void {
        this.httpClient.put(this.API_URL+student.id,student).subscribe();
       }
       public deleteStudent(student:Student): void {
        this.httpClient.delete(this.API_URL+student.id).subscribe();
       }

  }