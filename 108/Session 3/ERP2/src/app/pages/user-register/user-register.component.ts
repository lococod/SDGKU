import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  model: User = new User();
  retypePassword = "";
  
  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log("saving user", this.model);
  }
}
