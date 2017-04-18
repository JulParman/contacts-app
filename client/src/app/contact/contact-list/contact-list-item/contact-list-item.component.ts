import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../../contact";
import {DialogService} from "../../services/dialog.service";
import {MdDialog} from "@angular/material";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {
  @Input() contact: Contact;
  @Input() edit: EventEmitter<Contact>;
  @Input() remove: EventEmitter<Contact>;
  @Input() showOnMap: EventEmitter<Contact>;

  ngOnInit() {
  }

  editContact() {
    this.edit.emit(this.contact);
  }

  removeContact() {
    this.remove.emit(this.contact);
  }

  showContactOnMap() {
    this.showOnMap.emit(this.contact);
  }

}
