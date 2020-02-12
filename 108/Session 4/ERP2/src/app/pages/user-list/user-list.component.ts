import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users = [];

  constructor(private data : DataService) { 
    console.log(data.getSampleList());
    console.log(data.test());
    this.users = data.getSampleList();//gets user list from service
  }

  ngOnInit() {
  }

}
