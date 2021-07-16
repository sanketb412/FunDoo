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

  addColor: string =''
  
  form = new FormGroup({
    titleText: new FormControl(''),
    notesText: new FormControl('')
  })

  colorData:string=''

  receiveIconColor=($colorData:string) => {
    this.colorData = $colorData;
    console.log("create " + this.colorData)
    
    // let dataColor = {
    //   "color": this.colorData
    // }
    // this.service.changeColor(dataColor, this.tokenId).subscribe((dataColor) => {
    //   console.log("API " + dataColor)
    // })
  }

  tokenId = localStorage.getItem("token");

  submit=() => {
    let userData = {
      "title": this.form.controls.titleText.value,
      "description": this.form.controls.notesText.value,
      "color": this.colorData
    } 
    this.service.createnote(userData, this.tokenId).subscribe((userData) => {
      console.log(userData)
      this.form.reset(); 
    });
  }

  reloadCurrentPage() {
    window.location.reload();
  }
  
  
}
