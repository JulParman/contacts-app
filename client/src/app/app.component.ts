import { Component } from '@angular/core';
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
  dialogService: DialogService;
  selectedContact: Contact;

  constructor(contactService: ContactService){
    this.contacts = contactService.findContacts();
  }

  contactSelected(contact: Contact) {
    this.selectedContact = contact;
  }








}
