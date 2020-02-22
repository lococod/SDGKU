import { Component, OnInit } from '@angular/core';
import { DataService} from './../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

userName = "";
password = "";
registeredUsers = [];

  constructor(private data : DataService) {
    this.registeredUsers = data.getUsers();
   }

  ngOnInit() {
  }

validateLogin(){
  for (var i = 0 ; i <this.registeredUsers.length; i++){
    var user = this.registeredUsers[i];
    if(user.userName == this.userName && user.password == this.password){
      console.log ("Login Successful");
      return true;
    }
  }
  console.log ("Wrong Credentials");
  return false;
}

}
