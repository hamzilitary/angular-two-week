import { Component,  OnInit } from '@angular/core';
import { ToDo } from '../models/to-do.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  providers: [TaskService]
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  addTask(task: string, description: string, conditions: string, temperature: string, suggest: string) {
    let newToDo: ToDo = new ToDo(task, description, conditions, parseInt(temperature))
    if (suggest = "true"){
      newToDo.suggest = true;
    }
    // this.taskService.create(ToDo);
    // this.createdSender.emit(newToDo);
    this.taskService.addTask(newToDo);

  }



  ngOnInit() {
  }

}
