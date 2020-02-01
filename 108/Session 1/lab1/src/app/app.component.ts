import { Component } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab1';

  // auto execute function when the component is created
  constructor() {
    //variables
    var name: string = "Donald";
    console.log(name);
    var email: string = "lococod@gmail.com";
    console.log(email);
    var phone: number = 7022415138;
    console.log(phone);
    var age: number = 34;
    console.log(age);
    var found: boolean = true;
    console.log(found);
    var users: string[] = ["a", "b", "c"];
    users.push("Lococo");
    console.log(users);


    // declarations
    var xyz: string;

    // initialization

    xyz = users[0];
    var price = 99;

    var desc = "Product";

    price = 12;
    desc = "90";
    var inStock = false;
    this.hello();

    //this.time(4);
  }

  hello() {
    console.log("this is the hello function");
    this.time(5, "the message");
  }

  time(howManyTimes: number, message: string) {

    for (var i = 0; i < howManyTimes; i++) {
      if (i != 3) {
        console.log(i, message);
      }
    }

  }

}
