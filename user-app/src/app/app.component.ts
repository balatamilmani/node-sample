import { Component } from '@angular/core';
import {UserServiceService} from './user-service.service';

@Component({
  selector: 'app-root',
  providers: [UserServiceService],
  template: `
    <div *ngFor = "let user of userData.users">
        <h1>{{user.name}}</h1>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userData = "";
  constructor(private userService: UserServiceService){
      this.userService.getUsers().then(res =>{
      console.log(res);
      console.log(JSON.stringify(res));
      this.userData = JSON.parse(JSON.stringify(res));
      //this.users =  res.toString;
    } );
  }
}
