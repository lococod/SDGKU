import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.page.html',
  styleUrls: ['./label.page.scss'],
})
export class LabelPage implements OnInit {

  public label: string;

  constructor(private activatedRoute: ActivatedRoute,public notesService: NotesService) { }

  ngOnInit() {
    this.label = this.activatedRoute.snapshot.paramMap.get('id');
    this.notesService.load();
    
  }

}
