import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

  result: any;

  constructor(private _http: Http) { }

  getAllTasks() {
    return this._http.get("/api/tasks")
      .map(result => this.result = result.json().data);
  }

}
