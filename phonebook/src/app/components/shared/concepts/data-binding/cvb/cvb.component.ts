import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cvb',
  templateUrl: './cvb.component.html',
  styles: []
})
export class CvbComponent implements OnInit {

  userLoggedIn: string = "Vijay";
  @Output() loggedInEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendLoggedInUser(){
    this.loggedInEvent.emit(this.userLoggedIn);
  }

}
