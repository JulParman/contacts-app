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

  ngOnInit() {
    this.url = 'https://www.google.com/maps/place/' + this.address;
  }

  urlForGoogleMaps(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
