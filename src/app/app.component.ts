import { Component } from '@angular/core';
import { ToDo } from './models/to-do.model';
// import { AuthenticationService } from './services/authentication.service';
// import { AngularFireAuth } from 'angularfire2/auth'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AuthenticationService, AngularFireAuth]
})
export class AppComponent {
  title = 'Weather Or Not';


constructor(){}

  // constructor(public authService: AuthenticationService) {
  //   this.authService.user.subscribe(user => {
  //     console.log(user);
  //   });
  // }




}
