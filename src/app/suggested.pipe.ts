import {Pipe, PipeTransform} from '@angular/core';
import { ToDo } from './models/to-do.model';

@Pipe({
  name: "suggest",
  pure: false

})

export class SuggestedPipe implements PipeTransform {
  transform(input: ToDo[], taskPath){
    let outputArray: ToDo[]= [];
    if(taskPath === 'taskSuggested') {
      for(let i=0; i < input.length; i ++){
        if(input[i].suggest === true){
          outputArray.push(input[i]);
        }
      }
      return outputArray;
    }else if( taskPath === 'taskNotSuggested'){
      for(let i=0; i < input.length; i ++){
        if(input[i].suggest === false){
          outputArray.push(input[i]);
        }
      }
      return outputArray;
    }else{
      return input;
    }
  }



}
