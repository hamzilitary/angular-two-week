import {Pipe, PipeTransform} from '@angular/core';
import { ToDo } from './models/to-do.model';

@Pipe({
  name: "suggested",
  pure: false

})

export class SuggestedPipe implements PipTransform {
  transform(input: ToDo[], taskPath){
    let outputArray: ToDo[]= [];
    if(taskPath === 'taskSuggested') {
      for(let i=0; i ,input.length; i ++){
        
      }
    }
  }



}
