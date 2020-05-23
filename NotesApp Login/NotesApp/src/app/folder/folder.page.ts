import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { NotesService } from '../services/notes.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, public notesService: NotesService, private alertCtrl: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.notesService.load();
  }

  addNote(){

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
          placeholder: 'Label',
          name: 'label'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.notesService.createNote(data.title, this.folder.toLowerCase(), data.content, data.label.toLowerCase());
            console.log(data.title+" "+this.folder)
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });

  }


}
