import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  model: User = new User();
  retypePassword = null
  savedAlertVisible = false;

  constructor(private dataSrv: DataService) { }

  ngOnInit() {
  }

  isPasswordStrong(){var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");return strongRegex.test(this.model.password);}


  isDataCorrect(){

if(!this.isPasswordStrong()){return true};

   return !this.model.email 
        || !this.model.userName
        || !this.model.password 
        || this.model.password != this.retypePassword;
  }

  save() {
    console.log("saving user", this.model);
    //save the user into a service
    this.dataSrv.saveUser(this.model);

    //clear the form
    this.model = new User();
    this.retypePassword = null;
    this.savedAlertVisible = true;
  }
}
