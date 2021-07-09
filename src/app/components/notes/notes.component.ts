import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';
import { CreatenoteComponent } from '../createnote/createnote.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private service: NoteServiceService) { }

  tokenId = localStorage.getItem("token");

  note = []; 

  ngOnInit(): void {
  }


  getData() {
    this.service.note(this.tokenId).subscribe((data:any) => {
      this.note=data['data'].data
    })
  }
  
}
