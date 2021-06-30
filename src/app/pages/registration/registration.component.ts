import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    emailId: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  hide: Boolean = false

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form);
  }

  ngOnInit(): void {
  }
  
}
