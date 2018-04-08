import { Component, OnInit } from '@angular/core';
import { TaskService} from '../services/task.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [TaskService]
})
export class DetailComponent implements OnInit {
  taskId: string;
  taskToDisplay;


  constructor(private route: ActivatedRoute, private location: Location, private taskService: TaskService) { }

  ngOnInit() {
    
  }

}
