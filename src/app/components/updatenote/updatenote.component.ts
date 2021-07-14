import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.css']
})
export class UpdatenoteComponent implements OnInit {

  form!: FormGroup;

  title: any;
  description: any;

  constructor(private dialogRef: MatDialogRef< UpdatenoteComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteServiceService) {
    this.title = data.note.title,
    this.description = data.note.description
  }

  ngOnInit(): void {
  }

  tokenId = localStorage.getItem("token");


  submit=()=>{ 
    let UpdateUserData = {
      "title": this.title,
      "description": this.description, 
    }
    this.noteService.updateNote(UpdateUserData,this.tokenId).subscribe((UpdateUserData) => {
      console.log(" updated successfull", UpdateUserData);
    })
  }
}
