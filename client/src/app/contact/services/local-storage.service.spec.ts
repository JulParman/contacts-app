import {inject, TestBed} from '@angular/core/testing';
import * as _ from "lodash";
import {LocalStorageService} from './local-storage.service';
import {Contact} from "../contact";

describe('ContactLocalStorageService', () => {

  let localStorageKey = 'ca-contacts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
  });

  //Local Storage Mock
  beforeEach(() => {
    let store = {};
    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return store[key];
    });
    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      store[key] = value;
    });
  });

  function contactArray() {
    return [
      new Contact(1, 'FirstName', 'LastName', '1234567', 'Address', 'City'),
      new Contact(2, 'FirstName', 'LastName', '1234567', 'Address', 'City'),
      new Contact(3, 'FirstName', 'LastName', '1234567', 'Address', 'City')
    ]
  }

  it('Should initialize local storage', inject([LocalStorageService], (service: LocalStorageService) => {
    let data = localStorage.getItem(localStorageKey);
    expect(JSON.parse(data)).toEqual([]);
  }));

  it('#findContacts Should return all contacts', inject([LocalStorageService], (service: LocalStorageService) => {
    let contacts = contactArray();
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    let contactIds = _.map(contacts, 'id');
    service.findContacts().subscribe((contacts: Contact[]) => {
      expect(contacts.length).toBe(3);
      _.forEach(contacts, function (c) {
        expect(contactIds).toContain(c.id);
      });
    });
  }));

  it('#saveContact Should return contact', inject([LocalStorageService], (service: LocalStorageService) => {
    let contacts = contactArray();
    let contact = new Contact(4, 'FirstName', 'LastName', '1234567', 'Address', 'City');
    let contactIds = _.map(contacts, 'id');
    service.saveContact(contact).subscribe((contacts: Contact[]) => {
      _.forEach(contacts, function (c) {
        expect(contactIds).toContain(c.id);
        expect(contacts.length).toBe(4);
      });
    });
  }));

  it('#removeContact Should return contact', inject([LocalStorageService], (service: LocalStorageService) => {
    let contacts = contactArray();
    let contact =  new Contact(1, 'FirstName', 'LastName', '1234567', 'Address', 'City');
    //let contactIds = _.map(contacts, 'id');
    service.removeContact(contact).subscribe((contacts: Contact[]) => {
      _.forEach(contacts, function (c) {
        //expect(contactIds).toContain(!c.id);
        expect(contacts.length).toBe(2);
      });
    });
  }));


});
