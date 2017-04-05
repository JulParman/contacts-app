import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact";
import {MdDialog} from "@angular/material";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {
  contact:Contact;



  constructor() { }

  ngOnInit() {
  }



}
