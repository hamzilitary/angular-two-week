import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ToDo } from '../models/to-do.model';

@Injectable()
export class TaskService {
  tasks: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase)  {
  this.tasks = database.list('tasks');
}

getTasks(){
  return this.tasks
}
addTask(newTask: ToDo) {
    this.tasks.push(newTask);
  }
}
