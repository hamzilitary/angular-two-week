import { Component, EventEmitter, OnInit } from '@angular/core';
import { ToDo } from '../models/to-do.model';
import {TaskService} from '../services/task.service'
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [TaskService]
})



export class HomepageComponent implements OnInit {
  tasks: FirebaseListObservable<any[]>;
  filterBySuggest: string = "All Tasks";
  filtered: boolean = false;
  constructor(private taskService:TaskService) { }


  ngOnInit() {
      this.tasks = this.taskService.getTasks();
    }



    setFilterCategory(suggest: string) {
        this.filterBySuggest = suggest;
        this.filtered = true;
    }

    resetFilterCategory(){
      this.filterBySuggest = 'All Tasks'
      this.filtered = false;
    }






}
