import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Output() transColor:EventEmitter<string> = new EventEmitter<string>();

  @Input() noteId:any;

  isColor:string=''
  
  constructor(private noteService: NoteServiceService) { }

  token_Id = localStorage.getItem('token');

  ngOnInit(): void {
  }
  

  receiveColorCode = ($isColor:string) =>{
    console.log("icon " + $isColor);
    this.isColor = $isColor;
    console.log("singleIcon " + this.isColor)
    this.transColor.emit(this.isColor)
  }

  archivePage() {
    console.log(this.noteId)
    let dataArchive = {
      noteIdList:[this.noteId],   
      "isArchived": true    
    }
    console.log("note and boolean ", dataArchive);
    this.noteService.archivedNotes(dataArchive, this.token_Id).subscribe((dataArchive)=>{
      console.log("Archieve Successfully", dataArchive);
    });
  }

  deleteNote(){
    console.log(this.noteId);
    let data = {
      noteIdList:[this.noteId],
      isDeleted:true
    }
    this.noteService.deleteNotes(data, this.token_Id).subscribe((data)=>{
      console.log("Deleted Successfully", data);
    });
  }
}