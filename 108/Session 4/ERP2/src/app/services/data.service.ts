import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sampleList = ["Name1","User2","Sergio","Lois","Gabe","Sandie","Leo","Donald","Kullen"];

  constructor() { }


  public test(){
    return "this is a test";
  }
  public getSampleList(){
    return this.sampleList;
  }
}
