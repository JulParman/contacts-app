import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import * as _ from "lodash";
import {ContactStorage} from "./contact-storage";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LocalStorageService implements ContactStorage{

  private localStorageKey = 'ca-contacts';

  constructor() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  public saveContact(contact: Contact) {
    let contacts = this.getLocalStorage();
    if (!contact.id) {
      let lastSaved = <Contact>_.maxBy(contacts, 'id');
      contact.id = lastSaved ? lastSaved.id + 1 : 1;
      contacts.push(contact);
    }
    else {
      contacts = _.map(contacts, function (c: Contact) {
        return c.id == contact.id ? contact : c;
      });
    }
    this.writeLocalStorage(contacts);
    return Observable.of(contacts);
  }

  public removeContact(contact: Contact) {
    let contacts = this.getLocalStorage();
    _.remove(contacts, function (c: Contact) {
      return _.isEqual(contact.id, c.id);
    });
    this.writeLocalStorage(contacts);
    return Observable.of(contacts);
  }

  public findContacts() {

    let contacts: Contact[] = this.getLocalStorage();
    //return contacts;
    return Observable.of(contacts);
  }

  private writeLocalStorage(contacts) {
    contacts = JSON.stringify(contacts);
    localStorage.setItem(this.localStorageKey, contacts);
  }

  public getLocalStorage() {
    let data = localStorage.getItem(this.localStorageKey);
    return JSON.parse(data);
  }

  public updateContact(){

  }

}
