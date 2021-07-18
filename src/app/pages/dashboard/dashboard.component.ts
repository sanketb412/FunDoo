import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userName = localStorage.getItem("email");

  switchClick = 1

  noteDisplay(){
    return this.switchClick = 1;
  }

  archieveDisplay(){
    return this.switchClick = 2;
  }

  trashDisplay(){
    return this.switchClick = 3;
  }

}
