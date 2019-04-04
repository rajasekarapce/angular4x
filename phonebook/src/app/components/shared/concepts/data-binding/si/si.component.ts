import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styles: []
})
export class SiComponent implements OnInit {

  pername: string="Raja";
  age: number=20;
  city:string;
  
  //isLoggedIn:boolean=true;

  myProfile:IProfile

  skills:string[]=[
    "ng","raj"
  ]
  constructor() { 
    this.myProfile = {
      name: "vijay",
      city: "chennai"
    }
  }

  ngOnInit() {
  }

  getExperience(){
    return "13 years";
  }

}
export interface IProfile{
  name: string
  city: string
}
