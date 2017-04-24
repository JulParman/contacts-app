import {Contact} from "../contact";
import {Observable} from "rxjs/Observable";
export interface ContactStorage {
  saveContact(contact: Contact);
  findContacts(): Observable<any>;
  removeContact(contact: Contact);
  updateContact(contact: Contact);

}
