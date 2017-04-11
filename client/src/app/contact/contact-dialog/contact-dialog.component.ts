import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact";
import {MdDialog} from "@angular/material";
import {DialogService} from "../services/dialog.service";
import {ContactService} from "../services/contact.service";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {
  contact:Contact;
  static id: number = 2;

  constructor(public contactService:ContactService) {

  }

  ngOnInit() {
  }

  addNewContact(firstName,lastName,phone,address,city){
    this.contactService.addContact(ContactDialogComponent.id,firstName,lastName,phone,address,city);
    ContactDialogComponent.id++;
  }

  newEditContact(){

  }



}
