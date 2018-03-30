import { Component, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../models/to-do.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent  {
  @Output() createdSender = new EventEmitter();

  create(task: string, description: string, conditions: string, temperature: string, suggest: boolean) {
    let newToDo = new ToDo(task, description, conditions, parseInt(temperature), suggest)
    this.createdSender.emit(newToDo);
  }


  constructor() { }



}
