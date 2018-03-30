import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../models/to-do.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() childToDoList: ToDo[];
  @Output() viewClickSender = new EventEmitter();
  @Output() editClickSender = new EventEmitter();


  viewClicked(clickedToDo: ToDo){
    this.viewClickSender.emit(clickedToDo);
  }

  editClicked(clickedToDo: ToDo) {
    this.editClickSender.emit(clickedToDo);
  }



  constructor() { }



}
