import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { Projekat } from "../model/projekat.model";

@Injectable({
    providedIn: 'root'
  })
  export class ProjekatService {
    constructor(private httpClient:HttpClient){}

    private readonly API_URL = 'http://localhost:8082/projekat/';
    dataChange: BehaviorSubject<Projekat[]> = new BehaviorSubject<Projekat[]>([]);

    public getAllProjekts(): Observable<Projekat[]> {
        this.httpClient.get<Projekat[]>(this.API_URL).subscribe({
          next: (data) => {
            this.dataChange.next(data);
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
          }}
        );
        return this.dataChange.asObservable();
      }

      public addProjekat(projekat:Projekat): void {
        this.httpClient.post(this.API_URL,projekat).subscribe();
       }
    
       public updateProjekat(projekat:Projekat): void {
        this.httpClient.put(this.API_URL+projekat.id,projekat).subscribe();
       }
       public deleteProjekat(projekat:Projekat): void {
        this.httpClient.delete(this.API_URL+projekat.id).subscribe();
       }

  }