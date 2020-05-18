import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../services/notes.service';
import { Note } from '../interfaces/note';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public note: Note;
 

  

  constructor(private route: ActivatedRoute, private notesService: NotesService, private navCtrl: NavController) { 

    // Initialise a placeholder note until the actual note can be loaded in
    this.note = {
      id: '',
      title: '',
      content: '',
      folder: ''
    };

  }

  ngOnInit() {

    // Get the id of the note from the URL
    let noteId = this.route.snapshot.paramMap.get('id');
    let folderId = this.note.folder;
    console.log(noteId + " " + folderId);

    // Check that the data is loaded before getting the note
    // This handles the case where the detail page is loaded directly via the URL
    if(this.notesService.loaded){
      this.note = this.notesService.getNote(noteId)

    } else {
      this.notesService.load().then(() => {
        this.note = this.notesService.getNote(noteId)

      });
    }

  }

  

  noteChanged(){
    this.notesService.save();
    console.log(this.note.content);
    console.log(this.note.folder);
  }

  deleteNote(){
    
    this.notesService.deleteNote(this.note);
    this.navCtrl.navigateBack('/folder/'+this.note.folder);
    
  }

}