import { Component, OnInit } from '@angular/core';
import {Contact} from "./contact";
import {ContactService} from "./services/contact.service";
import {DialogService} from "./services/dialog.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  editOrNot: boolean;
  title: string;

  constructor(public contactService: ContactService, public dialogService: DialogService) {
    this.reload();
  }

  ngOnInit() {
    this.reload();
  }

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
      this.contactService.saveContact(contact).subscribe(data => this.reload());
      });
  }

  editContact(contact) {
    this.editOrNot = true;
    this.title = this.editing(this.editOrNot);
    this.dialogService.contactDialog(this.title,contact).subscribe(contact => {
      this.contactService.updateContact(contact).subscribe(data => this.reload());
      //this.contactService.saveContact(contact).subscribe(data => this.reload());
    });
  }

  deleteContact(contact: Contact) {
    this.contactService.removeContact(contact).subscribe(data => this.reload());
  }

  showContactOnMap(contact: Contact) {
    let mapAddress = contact.address + ', ' + contact.city;
    this.dialogService.mapDialog(mapAddress);
    console.log(mapAddress);
  }

  reload() {
    //this.contacts = this.contactService.findContacts();
    this.contactService.findContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

}
