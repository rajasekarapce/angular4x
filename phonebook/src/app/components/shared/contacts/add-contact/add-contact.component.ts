import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactsService } from '../../../../services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit, OnDestroy {

  profile :Object;
  isSaved:boolean;
 

  constructor(private ContactsService: ContactsService, private router: Router) { 
    this.profile = {
      name:'',
      phone:'',
      email:''
    };

  }

  ngOnInit() {
    
  }
  ngOnDestroy(){
    console.log("Destroy pls 2");
  }

  CreateData(formdata: NgForm){
    //1. send the data to services
    this.ContactsService.create(formdata.value)
    .subscribe(( response ) => {
      console.log(response);
      this.isSaved = true;

      setTimeout(() => {
        this.router.navigate(['contacts']);
      }, 1000)
    });
    //2. receive the data from services
  }
}

export interface IProfile{
  name: string
  email: string
  phone:number
}