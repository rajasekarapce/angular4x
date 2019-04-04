import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="container">
    <app-nav>
      <p>Go to Top</p>
    </app-nav>
      <p class="red">
        Copyrights &copy; 2018
      </p>
    </div>
  `,
  styles: [
    `.red{
      color:red;
    }`
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
