import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.css']
})
export class DisplaynoteComponent implements OnInit {

  @Input() notes: any;

  changeText: boolean;
  constructor() { 
    this.changeText = false;
  }

  ngOnInit(): void {
    console.log(this.notes);
  }

}
