import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-forget-email',
  templateUrl: './forget-email.component.html',
  styleUrls: ['./forget-email.component.css']
})

export class ForgetEmailComponent implements OnInit {

  constructor(private service: UserServiceService) { }

  form = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
  })

  submit() {
    console.log(this.form); 
    if (this.form.valid) {
      let data = {
        "email": this.form.controls.userName.value,
      }
      this.service.forgetemail(data).subscribe((data) => {
        console.log(data)
      })
    }
  }
  ngOnInit(): void {
  }

}
