import * as _ from 'lodash';

export class Contact {
  _id: number;
  _firstName: string;
  _lastName: string;
  _phone: string;
  _address: string;
  _city: string;

  constructor(id?: number, firstName?: string, lastName?: string, phone?: string, address?: string, city?: string) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._phone = phone;
    this._address = address;
    this._city = city;
  }

}
