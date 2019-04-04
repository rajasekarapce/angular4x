import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpbb',
  templateUrl: './cpbb.component.html',
  styles: []
})
export class CpbbComponent implements OnInit {

  @Input() LastVisitor: any;
  
  constructor() { }

  ngOnInit() {
  }

}
