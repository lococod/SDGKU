import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Observable } from 'rxjs';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from "angularfire2/firestore";
import { map } from "rxjs/operators";
import { firestore } from "firebase";

@Injectable({
  providedIn: 'root'
})
export class DataService {
messages: Observable<Message[]>;
messageCollection: AngularFirestoreCollection<Message>;

  constructor(private fb: AngularFirestore) {
    this.messageCollection = fb.collection<Message>("posts"); //open the posts pipeline - posts is the name of the connection on firebase
   }

  public saveMessage(message: Message) {
    console.log("saving", message);

    var item = Object.assign({}, message);
    this.messageCollection.add(item);
  }


  retriveMessageFromDB(){
this.messages = this.messageCollection.valueChanges();
  }

  public getAllMessages() {
this.retriveMessageFromDB();
return this.messages;
  }
}