import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ToDo } from '../models/to-do.model';
import {TaskService} from '../services/task.service'
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})



export class HomepageComponent implements OnInit {
  tasks: FirebaseListObservable<any[]>;

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
    this.taskService.getTasks().subscribe((t) => console.log(t));
  }
  ngOnInit() {
  this.tasks = this.taskService.getTasks();
  }



  constructor(private taskService:TaskService) { }



}
