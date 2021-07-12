import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.css']
})
export class UpdatenoteComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef< UpdatenoteComponent>) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ''
    })
  }

  submit(form: { value: { title: any; }; }) {
    this.dialogRef.close(`${form.value.title}`);
  }
}
