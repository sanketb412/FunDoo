import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../userService/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard  implements CanActivate {

  constructor(private authservice: UserServiceService, private router: Router) {}

  canActivate(): boolean {
    if (this.authservice.loggedIn()) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
