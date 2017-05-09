import {Contact} from "../contact";
import {Observable} from "rxjs/Observable";
export interface ContactStorage {
  saveContact(contact: Contact): Observable<any>;
  findContacts(): Observable<any>;
  removeContact(contact: Contact): Observable<any>;
  updateContact(contact: Contact): Observable<any>;

}
