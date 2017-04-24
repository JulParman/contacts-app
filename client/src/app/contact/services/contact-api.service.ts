import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Contact} from "../contact";
import {environment} from  "../../../environments/environment";
import {ContactStorage} from "./contact-storage";

@Injectable()
export class ContactApiService implements ContactStorage{

  url = environment.endpointUrl + '/contacts';
  //url = 'http://localhost:60829/api/contacts';
  //url = 'http://localhost:51057/api/contact';
  constructor(private http: Http) {
  }

  findContacts() {

    // return this.http.get(url).map(function (response) {
    //   return response.json() as Contact[];
    // });
    return this.http
      .get(this.url)
      .map(response => response.json() as Contact[]);
  }

  //saveContact(contact:Contact){
  //  return contact.id ? this.createContact(contact): this.updateContact(contact);

    // if(contact.id)
    // {
    //   this.createContact(contact);
    // }
    // else{
    //   this.updateContact(contact);
    // }
  //}

  saveContact(contact:Contact){
    return this.http.post(this.url, contact);
  }

  updateContact(contact:Contact){
    return this.http.put(this.url + '/' + contact.id,contact);
  }

  removeContact(contact:Contact){
    return this.http.delete(this.url + '/' + contact.id);
  }

}
