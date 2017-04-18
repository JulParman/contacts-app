import {Component, Injectable} from '@angular/core';
import {Contact} from "../contact";
import {MdDialog, MdDialogRef, MdDialogTitle} from "@angular/material";
import {ContactDialogComponent} from "../contact-dialog/contact-dialog.component";
import {MapDialogComponent} from "../map-dialog/map-dialog.component";

@Injectable()
export class DialogService {

  constructor(private dialog: MdDialog) { }

  public contactDialog(title:string,contact?: Contact){
    let dialogRef = this.dialog.open(ContactDialogComponent,{
    height:'600px',
    width:'300px',});
    dialogRef.componentInstance.contact = contact;
    dialogRef.componentInstance.titleForDialog = title;
    return dialogRef.afterClosed();
  }

  public mapDialog(mapAddress: string){
    let dialogRef = this.dialog.open(MapDialogComponent);
    dialogRef.componentInstance.address = mapAddress;
    return dialogRef.afterClosed();
  }

}


