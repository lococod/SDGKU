import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  clicked = 3;
  userName = "";
  password = "";
  registeredUsers = [];

  constructor(private data: DataService) {
    this.registeredUsers = data.getUsers();
  }

resetTimer(){
  setTimeout (() => {
    this.clicked = 3;
 }, 2000);
}

  ngOnInit() {
  }
  validateLogin() {
    for (var i = 0; i < this.registeredUsers.length; i++) {
      var user = this.registeredUsers[i];
      if (user.userName == this.userName && user.password == this.password) {
        console.log("Login Successful");
        this.clicked = 1;
        this.resetTimer();
        return true;
      }
    }
    console.log("Wrong Credentials");
    this.clicked = 2;
    this.resetTimer();
    return false;
  }


}
