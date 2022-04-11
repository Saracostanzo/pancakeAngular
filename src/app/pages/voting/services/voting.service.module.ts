import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError, retry, tap, map} from 'rxjs/operators';
import { LogService } from '../../info/services/log.service';
import { Voting } from './interface-voting';


@Injectable({
  providedIn: 'root'
})
export class VotingService {
  constructor(private logService: LogService ,private http: HttpClient) { }


   getAllVoting() {
     return this.http.get<Voting[]>(`http://localhost:3000/voting`).pipe(
        retry(3),
        tap(() => this.logService.log('HttpClient GetAll Voting')),
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
