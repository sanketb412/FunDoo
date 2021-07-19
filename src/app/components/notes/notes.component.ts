import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes = []; 
  static color: string;
  trashNote:any=[];
  
  constructor(private service: NoteServiceService) { }

  tokenId = localStorage.getItem("token");

  ngOnInit(): void {
    this.getData();
    this.service.getRefreshedData().subscribe(() => this.getData());
  }

  getData() {
    this.service.note(this.tokenId).subscribe((data:any) => {
      this.notes=data['data'].data.reverse()
      this.notes=this.notes.filter((note:any)=>{
       return note.isDeleted==false
      });

      this.notes=this.notes.filter((note:any)=>{
        return note.isArchived==false
      });
      
    })
  }
  
}
