import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.css']
})
export class DisplaynoteComponent implements OnInit {

  constructor() { }

  // @Input() message: Array;

  @Input() titleData = Array;

  @Input() descriptionData = Array;

  ngOnInit(): void {
  }
  
}
