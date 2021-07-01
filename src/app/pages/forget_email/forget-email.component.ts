import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-forget-email',
  templateUrl: './forget-email.component.html',
  styleUrls: ['./forget-email.component.css']
})
export class ForgetEmailComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
  })

  submit() {
    console.log(this.form); 
  }
  
  ngOnInit(): void {
  }

}
