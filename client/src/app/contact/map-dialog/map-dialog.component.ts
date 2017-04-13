import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.css']
})
export class MapDialogComponent implements OnInit {
  address: string;
  url: string;

  constructor(public sanitizer: DomSanitizer) {

  }

  bypassSecurityTrustResourceUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  makeUrl(){
    return 'http://www.google.com/maps?output=embed&q=' + this.address;
  }

  ngOnInit() {
    this.url = 'http://www.google.com/maps?output=embed&q=' + this.address;
  }

}
