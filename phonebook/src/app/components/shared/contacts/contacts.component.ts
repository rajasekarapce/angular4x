import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList : any[];
  
  constructor(private router: Router, private contactService:ContactsService){
    console.log("inside constructor");
  }

  ngOnInit() {
    this.contactService.getcontacts()
    .subscribe((response => {
      this.contactList = response;
    }))
  } 
  ngOnDestroy(){
    console.log("Destroy pls");
  }

  gohome(){
    //this.router.navigate(['about']);
    this.router.navigate(['/']);
  }
  addcontact(){
    this.router.navigate(['/new']);
  }
  contactdetails(){
    this.router.navigate(['/1']);
  }
}
