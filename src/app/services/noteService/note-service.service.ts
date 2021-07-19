import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';
import { environment } from '../../../environments/environment';
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

  updateNote = (userData: any, token: any) => {
    return this.httpService.post(`${this.url}notes/updateNotes`, userData, true, token)
    .pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }

  changeColor = (dataColor: any, token: any) => {
    return this.httpService.post(`${this.url}notes/changesColorNotes`, dataColor, true, token)
  }

  archiveData = (userData : any, token: any) => {
    return this.httpService.post(`${this.url}notes/archiveNotes`, userData, true, token)
    .pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }

  getArchieveNotes = (token: any) => {
    return this.httpService.get(`${this.url}notes/getArchiveNotesList`, true, token)
  }


  deleteNotes = (userData: any, token: any) => {
    return this.httpService.post(`${this.url}notes/trashNotes`, userData, true, token)
    .pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }

  getTrashNotes = (token: any) => {
    return this.httpService.get(`${this.url}notes/getTrashNotesList`, true, token)
  }
}
