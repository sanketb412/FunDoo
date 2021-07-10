import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes = []; 
  
  constructor(private service: NoteServiceService) { }

  tokenId = localStorage.getItem("token");

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.service.note(this.tokenId).subscribe((data:any) => {
      console.log(data)
      this.notes=data['data'].data
    })
  }
  
}
