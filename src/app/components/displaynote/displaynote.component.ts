import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.css']
})
export class DisplaynoteComponent implements OnInit {

  @Input() notes: any;

  changeText: boolean;

  updateDialogRef!: MatDialogRef<UpdatenoteComponent>;

  constructor(private dialog: MatDialog) { 
    this.changeText = false;
  }

  ngOnInit(): void {
    console.log(this.notes);
  }

  openAddDialog() {
    this.updateDialogRef = this.dialog.open(UpdatenoteComponent, {
      hasBackdrop: false
    });
  }
}


