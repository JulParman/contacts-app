import {Component, Injectable} from '@angular/core';
import {Contact} from "../contact";
import {MdDialog, MdDialogRef, MdDialogTitle} from "@angular/material";
import {ContactDialogComponent} from "../contact-dialog/contact-dialog.component";
import {MapDialogComponent} from "../map-dialog/map-dialog.component";

@Injectable()
export class DialogService {

  constructor(private dialog: MdDialog) { }

  public contactDialog(contact?: Contact){
    let dialogRef = this.dialog.open(ContactDialogComponent,{
    height:'600px',
    width:'350px',});
    dialogRef.componentInstance.contact = contact;
    return dialogRef.afterClosed();
  }

  public editDialog(contact: Contact){
    let dialogRef = this.dialog.open(ContactDialogComponent,{
      height:'600px',
      width:'350px',
    });
    dialogRef.componentInstance.contact = contact;
    return dialogRef.afterClosed();
  }

  public mapDialog(mapAddress: string){
    let dialogRef = this.dialog.open(MapDialogComponent);
    dialogRef.componentInstance.address = mapAddress;
    return dialogRef.afterClosed();
  }

}


