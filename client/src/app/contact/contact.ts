
export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;

  constructor(id?: number, firstName?: string, lastName?: string, phone?: string, address?: string, city?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.address = address;
    this.city = city;
  }

}
