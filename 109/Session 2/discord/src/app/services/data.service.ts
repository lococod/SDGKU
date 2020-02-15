import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public saveMessage(message){
    console.log("saving", message)
  }

  public getAllMessages(){

  }
}