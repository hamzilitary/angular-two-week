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
    new ToDo("Study", "Go to the library and read and write Code", "raining", 38, true),
    new ToDo("Walk the Dog", "Take Fido around the block", "raining", 38, false)
  ];

  selectedViewToDo: ToDo
  selectedEditToDo: ToDo

  viewToDoClicked(clickedViewToDo) {
    this.selectedViewToDo = clickedViewToDo;
  }

  finishViewing() {
    this.selectedViewToDo = null;
  }

  editToDoClicked(clickedEditToDo) {
    this.selectedEditToDo = clickedEditToDo;
  }

  finishEditing() {
    this.selectedEditToDo = null;
  }

  newToDo(newToDo) {
    this.masterToDo.push(newToDo);
  }



}
