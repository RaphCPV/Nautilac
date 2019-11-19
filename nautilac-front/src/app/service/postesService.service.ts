import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostesService {


  private REST_API_SERVER = 'https://localhost:44334/api/Postes';
    
  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


  getPostes(): Observable<any> {
    return this.httpClient.get(this.REST_API_SERVER);
  }

  UpdatePoste(poste: Poste): Observable<any> {
    console.log("le poste é"+poste.adresse);
    return this.httpClient.put(this.REST_API_SERVER + '/' + poste.Id_postes, (poste) );
  }

  DeletePoste(poste: Poste): Observable<any> {
     return this.httpClient.delete(this.REST_API_SERVER + '/' + poste.Id_postes);
  }
}
