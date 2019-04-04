import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../../../services/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../../../model/contact';

declare var $:any;

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})

export class ContactDetailsComponent implements OnInit {
  editableContact: Contact;
  contactData: Contact;
  conId:number;

  constructor(private contactdetail:ContactsService, private activeRouter:ActivatedRoute) { }

  ngOnInit() {

     this.activeRouter.params.subscribe( params => {
      this.conId = params.id;
      })

      this.activeRouter.params.subscribe(params => {
        this.contactdetail.getcontactByid(this.conId).subscribe(response => {
          this.contactData = response;
          console.log(response);
        }); 
      })
  }

  launchEditModal(){
    $('#editModule').modal('show');
          this.editableContact = JSON.parse(JSON.stringify(this.contactData)); //duplicate obj
  }

  updateuser() {
      this.contactdetail.updatecontactByid(this.editableContact).subscribe(response => {
        this.contactData = response;
        console.log(response);
      }); 
      $('#editModule').modal('hide');
  }

  deleteuser() {
    this.contactdetail.deletecontactByid(this.contactData).subscribe(response => {
      this.contactData = response;
      console.log(response);
    }); 
  }

 }
