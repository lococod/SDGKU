import { Message } from './../models/message';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  post : Message = new Message();

  constructor() {}


  sendMessage(){
    console.log("Sending Message", this.post);
  }
}
