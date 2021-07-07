import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.css']
})
export class CreatenoteComponent implements OnInit {

  constructor(private service: NoteServiceService) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    titleText: new FormControl(''),
    notesText: new FormControl('')
  })

  // tokenId: any

  tokenId = localStorage.getItem("token");

  submit=() => {
    let userData = {
      "title": this.form.controls.titleText.value,
      "description": this.form.controls.notesText.value
      // userData.append("title", this.form.controls.title.value)
      // userData.append("description",)
    } 
    this.service.createnote(userData, this.tokenId).subscribe((userData) => {
      console.log(userData)
    });
  }
}
