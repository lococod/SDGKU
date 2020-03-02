import { ShareService } from './../services/share.service';
import { DataService } from '../services/data.service';
import { Component } from '@angular/core';
import { Message } from '../models/message';
import { Friend } from '../models/friend';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  allMessages: Message[] = [];
  myFriends: Friend[] = [];
  friendFilter = "Everyone";
  constructor(private data: DataService, private shared: ShareService) {

    data.getAllMessages().subscribe(list => {
      console.log("messages ", list);
      this.allMessages = list.filter(m=> m.to == "Everyone" || m.to == shared.userName || m.from == shared.userName);
    });

    data.getAllFriends().subscribe(list => {
      this.myFriends = list.filter(f => f.belongsTo == shared.userName);
    })
  }


  getMessagesToDisplay(){
    if(this.friendFilter =="Everyone") return this.allMessages;
    return this.allMessages.filter(m => m.from == this.friendFilter || (m.from == this.shared.userName && m.to == this.friendFilter));
  }
}
