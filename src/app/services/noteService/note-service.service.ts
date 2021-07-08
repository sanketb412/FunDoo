import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private httpService: HttpServiceService) { }

  url = environment.baseUrl

  createnote = (userData: any, token: any) => {
    return this.httpService.post(`${this.url}notes/addNotes`, userData, true, token)
  }

  displaynote = (userData: any, token: any) => {
    // return this.httpService.GET(`${this.url}notes/getNotesList`, userData, true, token)
  }
}
