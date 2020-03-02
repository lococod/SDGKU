import { DataService } from '../services/data.service';
import { ShareService } from '../services/share.service';
import { Message } from '../models/message';
import { Component } from '@angular/core';
import { Friend } from '../models/friend';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  post: Message = new Message();
  myFriends: Friend[] = [];

  constructor(private ShareSrvc: ShareService, private dataSrvc: DataService) {
    this.dataSrvc.getAllFriends().subscribe(list => {
      this.myFriends = [];
      this.myFriends = list.filter(f=> f.belongsTo == ShareSrvc.userName);
        });

  }

  sendMessage(){
    this.post.from = this.ShareSrvc.userName;
    this.dataSrvc.saveMessage(this.post);

    this.post = new Message();
  }

}
