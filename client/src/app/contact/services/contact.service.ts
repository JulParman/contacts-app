import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {LocalStorageService} from "./local-storage.service";

@Injectable()
export class ContactService {


  constructor(public localStorage: LocalStorageService) {
    /*this.contacts = [
      new Contact(0, 'Keijo', 'Joku', '0401234567', 'Katu 1', 'Lappeenranta'),
      new Contact(1, 'Masa', 'Joku', '0401112223', 'Katu 2', 'Lappeenranta')
    ];*/
  }

  public findContacts(){
    return this.localStorage.loadContacts();
  }

  /*public addContact(firstName:any,lastName:any,phone:any,address:any,city:any) {
    new Contact(this.id,firstName,lastName,phone,address,city);
    this.id++;
  }*/

  public addContact(contact: Contact) {
    return this.localStorage.saveContact(contact);

  }

  public editContact(contact: Contact){

  }

  public removeContact(contact:Contact){
    //this.contacts.splice(contact.id, 1);
    return this.localStorage.deleteFromLocalStorage(contact);
  }

}
