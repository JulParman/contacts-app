import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {LocalStorageService} from "./local-storage.service";

@Injectable()
export class ContactService {


  constructor(public localStorage: LocalStorageService) {
  }

  public findContacts(){
    return this.localStorage.loadContacts();
  }

  public addContact(contact: Contact) {
    return this.localStorage.saveContact(contact);
  }

  public removeContact(contact:Contact){
    return this.localStorage.deleteFromLocalStorage(contact);
  }

}
