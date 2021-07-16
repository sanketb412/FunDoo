import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Output() transColor:EventEmitter<string> = new EventEmitter<string>();

  isColor:string=''

  constructor() { }

  ngOnInit(): void {
  }
  

  receiveColorCode = ($isColor:string) =>{
    console.log("icon " + $isColor);
    this.isColor = $isColor;
    console.log("singleIcon " + this.isColor)
    this.transColor.emit(this.isColor)
  }

  archivePage() {
    let noteData = {
      // noteIdList: [props.noteId],       
      isArchieved: true,
    };
  }
}