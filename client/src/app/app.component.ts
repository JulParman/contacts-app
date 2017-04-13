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
  editOrNot: boolean;
  title: string;
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
  editing(editOrNot) {
    if (editOrNot === true) {
      return 'Edit contact';
    }
    else {
      return 'Add contact';
    }
  }

  addContact() {
    this.editOrNot = false;
    this.title = this.editing(this.editOrNot);
    this.dialogService.contactDialog(this.title).subscribe(contact => {
      this.contactService.addContact(contact);
      this.reload();
    });
    console.log(this.editOrNot);
  }

  editContact(contact) {
    this.editOrNot = true;
    this.title = this.editing(this.editOrNot);
    this.dialogService.contactDialog(this.title,contact);
    console.log(this.editOrNot);
  }

  deleteContact(contact: Contact) {
    this.contactService.removeContact(contact);
    this.reload();
  }

  showContactOnMap(contact: Contact) {
    let mapAddress = contact.address + ', ' + contact.city;
    this.dialogService.mapDialog(mapAddress);
    console.log(mapAddress);
  }

  reload() {
    this.contacts = this.contactService.findContacts();
  }


}
