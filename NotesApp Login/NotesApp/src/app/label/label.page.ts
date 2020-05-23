import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../services/notes.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-label',
  templateUrl: './label.page.html',
  styleUrls: ['./label.page.scss'],
})
export class LabelPage implements OnInit {

  public label: string;

  constructor(private activatedRoute: ActivatedRoute,public notesService: NotesService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.label = this.activatedRoute.snapshot.paramMap.get('id');
    this.notesService.load();
    
  }

  addNote2(){

    this.alertCtrl.create({
      header: 'New Note',
      message: 'What are the note titles and additional details?',
      inputs: [
        {
          type: 'text',
          placeholder: 'Title',
          name: 'title'
        },
        {
          type: 'text',
          placeholder: 'Message',
          name: 'content'
        },
        {
          type: 'text',
          placeholder: 'Folder',
          name: 'folder'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.notesService.createNote(data.title, data.folder.toLowerCase(), data.content, this.label.toLowerCase());
            console.log(data.title+" "+this.label)
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });

  }



}
