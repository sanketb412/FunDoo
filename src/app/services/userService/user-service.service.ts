import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpServiceService) { }

  url = environment.baseUrl

  registration = (data: any) => {
    return this.httpService.post(`${this.url}user/userSignUp`, data)
  }

  login = (data: any) => {
    return this.httpService.post(`${this.url}user/login`, data)
  }

  forgetemail = (data: any) => {
    return this.httpService.post(`${this.url}user/reset`, data)
  }

  password = (data: any) => {
    return this.httpService.post(`${this.url}/user/reset-password`, data)
  }
}
