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

  constructor() { }

  public saveMessage(message: Message) {
    console.log("saving", message)
  }

  public getAllMessages() {

  }
}