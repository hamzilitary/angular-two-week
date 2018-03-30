import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../models/to-do.model';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent  {
  @Input() childViewToDo: ToDo;
  @Output() clickedDoneView = new EventEmitter();

  finishViewing() {
    this.clickedDoneView.emit();
  }


  constructor() { }



}
