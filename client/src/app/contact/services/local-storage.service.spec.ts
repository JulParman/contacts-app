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
      new Contact(1, 'Yksi', 'LastName', '1234567', 'Address', 'City'),
      new Contact(2, 'Kaksi', 'LastName', '1234567', 'Address', 'City'),
      new Contact(3, 'Kolme', 'LastName', '1234567', 'Address', 'City')
    ];
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

  it('#saveContact Should add new contact', inject([LocalStorageService], (service: LocalStorageService) => {
    let contacts = contactArray();
    let contact: Contact = new Contact(null, 'Neljä', 'LastName', '1234567', 'Address', 'City');
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    service.saveContact(contact).subscribe((saved: Contact[]) => {
      let contactIds = _.map(saved, 'id');
      expect(saved.length).toBe(4);
      expect(contactIds).toContain(contact.id);
    });
  }));

  it('#removeContact Should remove contact', inject([LocalStorageService], (service: LocalStorageService) => {
    let contacts = contactArray();
    let contact = contacts[1];
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    service.removeContact(contact).subscribe((saved: Contact[]) => {
      let contactIds = _.map(saved, 'id');
      _.forEach(saved, function () {
        expect(contactIds).not.toContain(contact.id);
        expect(saved.length).toBe(2);
      });
    });
  }));

  it('#updateContact Should update contact', inject([LocalStorageService], (service: LocalStorageService) => {
    let contacts = contactArray();
    let contact: Contact = new Contact(1, 'Neljä', 'LastName', '1234567', 'Address', 'City');
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    service.updateContact(contact).subscribe((saved: Contact[]) => {
      expect(saved.length).toBe(3);
      expect(saved).toContain(contact);
    });
  }));

});
