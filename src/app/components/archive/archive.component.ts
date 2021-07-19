import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  archieveNote:any=[];
  notes:any=[];
  note=[];
  AllNotes=[];

  token_Id = localStorage.getItem('token');

  constructor(private noteService: NoteServiceService ) { }

  ngOnInit(): void {
    this.getAllArchieve();
    this.noteService.getRefreshedData().subscribe(() => this.getAllArchieve());
  }

  getAllArchieve(){
    this.archieveNote=this.noteService.getArchieveNotes( this.token_Id).subscribe((data:any)=>{
      console.log(data['data'].data);
      this.archieveNote=data['data'].data.reverse()
      this.notes=this.archieveNote.filter((note:any)=>{
       return note.isArchieved==false
       })  
    })
  }

}
