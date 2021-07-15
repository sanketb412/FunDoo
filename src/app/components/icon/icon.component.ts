import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  isColor:string=''

  constructor() { }

  ngOnInit(): void {
  }

  receiveColorCode = ($isColor:string) =>{
    console.log("icon " + $isColor);
    this.isColor = $isColor;
    // console.log("singleIcon " + this.isColor)
  }


}