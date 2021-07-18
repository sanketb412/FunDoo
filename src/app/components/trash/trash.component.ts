import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  trashNote:any=[];
  notes:any=[];
  note=[];
  AllNotes=[];
  
  token_Id = localStorage.getItem('token');

  constructor( private noteService: NoteServiceService) { }

  ngOnInit(): void {
    this.getAllTrash();
    this.noteService.getRefreshedData().subscribe(() => this.getAllTrash());
  }

  getAllTrash(){
    this.trashNote=this.noteService.getTrashNotes( this.token_Id).subscribe((data:any)=>{
      console.log(data['data'].data);
      this.trashNote=data['data'].data.reverse()
      this.notes=this.trashNote.filter((note:any)=>{
       return note.isDeleted==true
       })  
       console.log(this.notes);
    })
    
  }
}
