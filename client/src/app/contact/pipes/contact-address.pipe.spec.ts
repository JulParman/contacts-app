import {ContactAddressPipe} from "./contact-address.pipe";
import {Contact} from "../contact";

describe('ContactAddressPipe', () => {
  let pipe = new ContactAddressPipe();

  it('should return streetAddress and city', () => {
    let contact = new Contact(1, 'FirstName', 'LastName', '1234567', 'Address 1', 'City');
    expect(pipe.transform(contact)).toBe(contact.address + ', ' + contact.city);
  });

  it('should return streetAddress', () => {
    let contact = new Contact(1, 'FirstName', 'LastName', '1234567', 'Address 1', '');
    expect(pipe.transform(contact)).toBe(contact.address);
    contact.city = null;
    expect(pipe.transform(contact)).toBe(contact.address);
  });

  it('should return city', () => {
    let contact = new Contact(1, 'FirstName', 'LastName', '1234567', '', 'City');
    expect(pipe.transform(contact)).toBe(contact.city);
    contact.address = null;
    expect(pipe.transform(contact)).toBe(contact.city);
  });

  it('should return empty string', () => {
    let contact = new Contact(1, 'FirstName', 'LastName', '1234567', '', '');
    expect(pipe.transform(contact)).toBe('');
    expect(pipe.transform(null)).toBe('');
  });
});
