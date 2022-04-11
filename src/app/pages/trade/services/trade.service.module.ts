import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError, retry, tap, map} from 'rxjs/operators';
import { LogService } from '../../info/services/log.service';
import { Tokens } from '../../info/services/interface-token';

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  constructor(private logService: LogService ,private http: HttpClient) { }


   getAllToken() {
     return this.http.get<Tokens[]>(`http://localhost:3000/tokens`).pipe(
        retry(3),
        tap(() => this.logService.log('HttpClient GetAll Token')),
        catchError(this.handleError)
      );
    }


 private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    'Something bad happened; please try again later.');
};
}
