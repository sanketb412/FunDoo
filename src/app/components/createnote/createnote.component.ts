import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.css']
})
export class CreatenoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit=() => {
    let userData = new FormData()
    // userData.append("title", )
    // userData.append("description",)
    console.log("NoteCreated")
  }
}
