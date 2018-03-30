import { Component } from '@angular/core';
import { ToDo } from './models/to-do.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather Or Not';
  masterToDo: ToDo[] = [
    new ToDo("Sky Diving", "Go to the drop-zone and jump out", "raining", 38, false),
    new ToDo("Study", "Go to the library and read and write Code", "raining", 38, false)
  ];
}
