import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from "../contact";
import {templateJitUrl} from "@angular/compiler";
import * as _ from "lodash";

@Pipe({
  name: 'contactAddress'
})
export class ContactAddressPipe implements PipeTransform {

  transform(contact: Contact, args?: any): any {
    let addressParts = [contact.address || null, contact.city || null];
    addressParts = _.reject(addressParts, _.isNull);
    return addressParts.join(', ');
  }

}
