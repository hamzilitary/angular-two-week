export class ToDo {
  constructor(public task: string, public description: string, public conditions: string, public temperature: number, public suggest: boolean){}
}

//
// let request = new XMLHttpRequest();
// let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f41bec18f9c4fb89d5f3987aac74166d`
