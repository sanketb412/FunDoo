import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor(private service: UserServiceService) { }

  form = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  submit() {
    console.log(this.form); 
    if (this.form.valid) {
      let data = {
        "password": this.form.controls.newPassword.value,
      }
      this.service.password(data).subscribe((data) => {
        console.log(data)
      })
    }
  }


  ngOnInit(): void {
  }

}
