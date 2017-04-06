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

}
