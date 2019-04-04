import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb',
  templateUrl: './pb.component.html',
  styles: [`
    .redText{
      color:red;
    }
    .greenText{
      color:green;
      font-size:20px;
    }
  `]
})
export class PbComponent implements OnInit {

  pname:string="raja";
  
  constructor() { }

  ngOnInit() {
  }

  isAllowed(){
    return true;
  }
}
