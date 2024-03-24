import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Grupa } from "../model/grupa.model";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class GrupaService {
    constructor(private httpClient:HttpClient){}

    private readonly API_URL = 'http://localhost:8082/grupa/';
    dataChange: BehaviorSubject<Grupa[]> = new BehaviorSubject<Grupa[]>([]);

    public getAllGrupas(): Observable<Grupa[]> {
        this.httpClient.get<Grupa[]>(this.API_URL).subscribe({
          next: (data) => {
            this.dataChange.next(data);
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
          }}
        );
        return this.dataChange.asObservable();
      }

      public getGrupa(id:number): Observable<Grupa[]> {
        this.httpClient.get<Grupa[]>(this.API_URL + id).subscribe({
          next: (data) => {
            this.dataChange.next(data);
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
          }}
        );
        return this.dataChange.asObservable();
      }
      
      public addGrupa(grupa:Grupa): void {
        this.httpClient.post(this.API_URL,grupa).subscribe();
       }
    
       public updateGrupa(grupa:Grupa): void {
        this.httpClient.put(this.API_URL+grupa.id,grupa).subscribe();
       }
       public deleteGrupa(grupa:Grupa): void {
        this.httpClient.delete(this.API_URL+grupa.id).subscribe();
       }

  }