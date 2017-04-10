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
  selectedContact: Contact;

  constructor(public dialog: MdDialog, public contactService: ContactService, public dialogService: DialogService) {
    this.contacts = contactService.findContacts();
  }

  contactSelected(contact: Contact) {
    this.selectedContact = contact;
  }

  addContact(contact) {
    //this.dialog.open(ContactDialogComponent);
    this.dialogService.contactDialog(contact);
  }


}
