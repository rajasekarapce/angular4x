import { Component } from '@angular/core';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'phone-book';
  timeOfLastVisitor = 'time is 10:30 AM';

  getLoggedInUser($event){
    alert("test");
    console.log($event);
  }
  
}
