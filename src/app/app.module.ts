import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotSuggestedPipe} from './not-suggested.pipe';
import { SuggestedPipe} from './suggested.pipe';
import { AppComponent } from './app.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import {TaskService} from './task.service';
import { NavBarComponent } from './nav-bar/nav-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    ViewTaskComponent,
    TaskListComponent,
    EditTaskComponent,
    NewTaskComponent,
    SuggestedPipe,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TaskService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
