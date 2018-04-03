import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../models/to-do.model';
import {TaskService} from '../task.service'


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() childToDoList: ToDo[];
  @Output() viewClickSender = new EventEmitter();
  @Output() editClickSender = new EventEmitter();
  filterBySuggest: string = "allTasks";


  viewClicked(clickedToDo: ToDo){
    this.viewClickSender.emit(clickedToDo);
  }

  editClicked(clickedToDo: ToDo) {
    this.editClickSender.emit(clickedToDo);
  }

  onChange(optionFromMenu) {
    this.filterBySuggest = optionFromMenu;
  }

  toggleSuggest(clickedToDo: ToDo, setSuggest: boolean) {
    clickedToDo.suggest = setSuggest;
    this.svc.getTasks().subscribe((t) => console.log(t));
  }



  constructor(private svc:TaskService) { }



}
