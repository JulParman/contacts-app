import {Component} from '@angular/core';
import {Contact} from "./contact/contact";
import {MdDialog} from "@angular/material";
import {DialogService} from "app/contact/services/dialog.service";
import {ContactDialogComponent} from "./contact/contact-dialog/contact-dialog.component";
import {ContactService} from "./contact/services/contact.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];
  //selectedContact: Contact;

  constructor(public contactService: ContactService, public dialogService: DialogService) {
    this.reload();
  }

  ngOnInit() {
    this.reload();
  }

  /*contactSelected(contact: Contact) {
    this.selectedContact = contact;
  }*/


  addContact() {
    //this.dialogService.contactDialog(contact);
    this.dialogService.contactDialog().subscribe(contact => {
      this.contactService.addContact(contact);
      this.reload();
    });
  }

  editContact(contact){
    this.dialogService.contactDialog(contact);
  }

  showContactOnMap(contact: Contact){
    let address = contact._address + ', ' + contact._city;
    this.dialogService.mapDialog(address);
  }

  reload(){
    this.contacts = this.contactService.findContacts();
  }


}
