import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserServiceService, private router: Router) { }

  form = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })
  
  get f() {
    return this.form.controls;
  }

  submit() {
    // console.log(this.form); 
    if (this.form.valid) {
      let data = {
        "email": this.form.controls.userName.value,
        "service": "advance",
        "password": this.form.controls.password.value
      }
      
      this.service.login(data).subscribe((data: any) => {
        console.log(data);

        localStorage.setItem("firstName", data["firstName"]);
        localStorage.setItem("lastName", data["lastName"]);
        localStorage.setItem("email", data["email"]);
        localStorage.setItem("token", data["id"]);
        this.router.navigate(['/dashboard']);
      });
    }
  }
  
  ngOnInit(): void {
  }

}