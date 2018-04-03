import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) { }

  public getTasks() : Observable<string[]> {
  //  return http.get<string[]>("myUrl");
    return Observable.of(["derp"]);
  }
}
