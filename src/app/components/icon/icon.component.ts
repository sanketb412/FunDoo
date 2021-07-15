import { Component, OnInit } from '@angular/core';

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


  getColor($isColor:string) {
    console.log($isColor);
    this.isColor = $isColor;
  }
}
