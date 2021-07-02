import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor(private service: UserServiceService, private route: ActivatedRoute) { }

  form = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
    newConfirmPassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  token: any

  ngOnInit(): void {
    console.log(this.route.snapshot.params.token)
    this.token = this.route.snapshot.params.token;
  }

  submit() {
    console.log(this.form); 
    if(this.form.controls.newPassword.value == this.form.controls.newConfirmPassword.value){
      if (this.form.valid) {
        let data = {
          "newPassword": this.form.controls.newPassword.value,
        }
        this.service.password(data, this.token).subscribe((data) => {
          console.log(data)
        })
      }
    } else {
      alert("please Enter matching password");
    }
  }

}
