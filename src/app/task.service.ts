import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Task} from './task';
import {catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

@Injectable()
export class TaskService {

  result: any;

  constructor(private _http: Http) { }

  getAllTasks() {
    return this._http.get("/api/tasks")
      .map(result => this.result = result.json().data);
  }

  createTask(task) {
    console.log(JSON.stringify(task));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post('/api/task/new', JSON.stringify(task), options).subscribe(
      res => {
        const response = res.text();
      }
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }

}
