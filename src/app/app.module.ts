import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotSuggestedPipe} from './not-suggested.pipe';
import { SuggestedPipe} from './suggested.pipe';
import { AppComponent } from './app.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewTaskComponent,
    TaskListComponent,
    EditTaskComponent,
    NewTaskComponent,
    SuggestedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
