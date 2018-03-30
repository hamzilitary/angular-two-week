import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from './models/to-do.model';

@Pipe({
  name: "notSuggested",
  pure: false
})

export class NotSuggestedPipe implements PipeTransform{
  transform(input: ToDo[], args){
    let outputArray: ToDo[] = [];
    for(let i=0; i < input.length; i ++){
      if(input[i].suggest === false){
        outputArray.push(input[i])
      }
    }
    return outputArray;
  }
}
