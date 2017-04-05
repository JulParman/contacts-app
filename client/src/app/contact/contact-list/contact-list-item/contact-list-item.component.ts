import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../../contact";

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {
  @Input() contacts: Contact;
  @Input() edit: EventEmitter<Contact>;
  @Input() remove: EventEmitter<Contact>;
  @Input() showOnMap: EventEmitter<Contact>;

  constructor() {
    this.edit = new EventEmitter();
    this.remove = new EventEmitter();
    this.showOnMap = new EventEmitter();
  }

  ngOnInit() {
  }

  contactEditItem(contact:Contact){
    this.edit.emit(contact);
  }

  contactRemoveItem(contact:Contact){
    this.remove.emit(contact);
  }
  contactShowOnMap(contact:Contact){
    this.showOnMap.emit(contact);
  }




}
