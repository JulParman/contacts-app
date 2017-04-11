import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import * as _ from "lodash";

@Injectable()
export class LocalStorageService {

  private localStorageKey = 'ca-contacts';

  constructor() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  public saveContact(contact: Contact){
    let contacts = this.getLocalStorage();
    if(!contact._id){
      let lastSaved = <Contact>_.maxBy(contacts, '_id');
      contact._id = lastSaved ? lastSaved._id + 1 : 1;
      contacts.push(contact);
    }
    else{
      contacts = _.map(contacts, function (c:Contact) {
        return c._id == contact._id ? contact : c;
      });
    }
    this.writeLocalStorage(contacts);
  }

  public deleteFromLocalStorage(contact: Contact){
    let contacts = this.getLocalStorage();
    _.remove(contacts,function (c:Contact) {
      return _.isEqual(contact._id,c._id);
    });
    this.writeLocalStorage(contacts);
  }

  public loadContacts() {
    let contacts: Contact[] = this.getLocalStorage();
    return contacts;
  }

  private writeLocalStorage(contacts) {
    contacts = JSON.stringify(contacts);
    localStorage.setItem(this.localStorageKey, contacts);
  }

  public getLocalStorage() {
    let data = localStorage.getItem(this.localStorageKey);
    return JSON.parse(data);
  }

}
