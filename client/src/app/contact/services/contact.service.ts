import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {LocalStorageService} from "./local-storage.service";
import {ContactApiService} from "./contact-api.service";
import {ContactStorage} from "./contact-storage";
import {environment} from "../../../environments/environment";

@Injectable()
export class ContactService {

  contactStorage: ContactStorage;

  constructor(public localStorage: LocalStorageService, private contactApiService: ContactApiService) {
    this.contactStorage = environment.endpointUrl ? contactApiService : localStorage;
  }

  public findContacts() {
    //return this.localStorage.loadContacts();
    //return this.contactApiService.findContacts();
    return this.contactStorage.findContacts();
  }

  public saveContact(contact: Contact) {
    //return this.contactApiService.saveContact(contact);
    return this.contactStorage.saveContact(contact);
  }

  public updateContact(contact:Contact){
    //return this.contactApiService.updateContact(contact);
    return this.contactStorage.updateContact(contact);
  }

  public removeContact(contact: Contact) {
    //return this.contactApiService.removeContact(contact);
    return this.contactStorage.removeContact(contact);
  }

}
