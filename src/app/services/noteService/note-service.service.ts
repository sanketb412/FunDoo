import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  private refresh = new Subject<void>();
  
  getRefreshedData() {
    return this.refresh;
  }

  constructor(private httpService: HttpServiceService) { }

  url = environment.baseUrl

  createnote = (userData: any, token: any) => {
    return this.httpService.post(`${this.url}notes/addNotes`, userData, true, token).pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }

  note = (token: any) => {
    return this.httpService.get(`${this.url}notes/getNotesList`, true, token)
  }


}
