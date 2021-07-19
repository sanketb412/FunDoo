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

  token_Id = localStorage.getItem('token');

  constructor(private noteService: NoteServiceService ) { }

  ngOnInit(): void {
    this.getArchieve();
    this.noteService.getRefreshedData().subscribe(() => this.getArchieve());
  }

  getArchieve(){
    console.log("getting archive")
    this.archieveNote=this.noteService.getArchieveNotes(this.token_Id).subscribe((data:any)=>{
      this.notes=data['data'].data 
    })
  }

}
