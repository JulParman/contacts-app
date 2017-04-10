import {Injectable} from '@angular/core';
import {Contact} from "../contact";

@Injectable()
export class ContactService {
  private contacts: Contact[];


  constructor() {
    this.contacts = [
      new Contact(0, 'Keijo', 'Joku', '0401234567', 'Katu 1', 'Lappeenranta'),
      new Contact(1, 'Masa', 'Joku', '0401112223', 'Katu 2', 'Lappeenranta')
    ];
  }

  public findContacts(): Contact[] {
    return this.contacts;
  }

  /*public addContact(firstName:any,lastName:any,phone:any,address:any,city:any) {
    new Contact(this.id,firstName,lastName,phone,address,city);
    this.id++;
  }*/

  public addContact(id:any,firstName:any,lastName:any,phone:any,address:any,city:any) {
    this.contacts.push(new Contact(id,firstName,lastName,phone,address,city));
    console.log(this.contacts);
  }

}
