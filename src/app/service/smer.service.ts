import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { Smer } from "../model/smer.model";

@Injectable({
    providedIn: 'root'
  })
  export class SmerService {
    constructor(private httpClient:HttpClient){}

    private readonly API_URL = 'http://localhost:8082/smer/';
    dataChange: BehaviorSubject<Smer[]> = new BehaviorSubject<Smer[]>([]);

    public getAllSmers(): Observable<Smer[]> {
        this.httpClient.get<Smer[]>(this.API_URL).subscribe({
          next: (data) => {
            this.dataChange.next(data);
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
          }}
        );
        return this.dataChange.asObservable();
      }

      public addSmer(smer:Smer): void {
        this.httpClient.post(this.API_URL,smer).subscribe();
       }
    
       public updateSmer(smer:Smer): void {
        this.httpClient.put(this.API_URL+smer.id,smer).subscribe();
       }
       public deleteSmer(smer:Smer): void {
        this.httpClient.delete(this.API_URL+smer.id).subscribe();
       }

  }