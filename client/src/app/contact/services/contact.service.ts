import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {LocalStorageService} from "./local-storage.service";
import {ContactApiService} from "./contact-api.service";

@Injectable()
export class ContactService {


  constructor(public localStorage: LocalStorageService, private contactApiService: ContactApiService) {
  }

  public findContacts() {
    //return this.localStorage.loadContacts();
    return this.contactApiService.findContacts();
  }

  public addContact(contact: Contact) {
    //return this.localStorage.saveContact(contact);
    return this.contactApiService.createContact(contact);
  }

  public updateContact(contact:Contact){
    return this.contactApiService.updateContact(contact);
  }

  public removeContact(contact: Contact) {
    //return this.localStorage.deleteFromLocalStorage(contact);
    return this.contactApiService.removeContact(contact);
  }

}
