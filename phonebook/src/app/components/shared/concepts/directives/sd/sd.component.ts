import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sd',
  templateUrl: './sd.component.html',
  styles: []
})
export class SdComponent implements OnInit {

  programList: string[];
  value:any;
  birthday = new Date(1988, 3, 15);
  lorem:string="loremloremloremloremloremloremloremloremloremloremlorem";
  
  constructor() { 
    this.programList = [
      "planet earth", "man vs wild"
    ]
  }

  ngOnInit() {
  }

  isPremiumUser(){
    return true;
  }
}


