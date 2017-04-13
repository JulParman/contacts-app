import {Component, OnInit} from '@angular/core';
import {Contact} from "../contact";
import {MdDialog, MdDialogRef} from "@angular/material";
import {DialogService} from "../services/dialog.service";
import {ContactService} from "../services/contact.service";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {
  contact: Contact;
  titleForDialog:string;

  constructor(public dialog: MdDialogRef<ContactDialogComponent>) {

  }

  ngOnInit() {
    if (!this.contact) {
      this.contact = new Contact();
    }
  }

  addNewContact() {
    this.dialog.close(this.contact);

  }


}
