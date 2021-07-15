import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  @Output() ItemEvent:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  colors=['#fff7e6','#FBBC04', '#f28b82','#fbbc04','#fff475','#ccff90','#a7ffeb','#cbf0f8','#aecbfa','#fdcfe8','#e6c9a8','#0080ff']

  colorCode: any

  passColor = (colorCode:string) => {
    this.colorCode = colorCode
    console.log({color: colorCode});
    this.ItemEvent.emit(colorCode);
  }
}

