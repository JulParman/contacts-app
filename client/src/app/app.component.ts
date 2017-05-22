import {Component, HostListener, ViewChild, Input} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {MdSidenav} from "@angular/material";
import * as _ from "lodash";
import {LoginComponent} from "./contact/user/login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toolbarDisabled: boolean;
  sidenavMode: string;

  @ViewChild('sidenav') sidenav: MdSidenav;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    let width = event ? event.target.innerWidth : window.innerWidth;
    this.sidenavMode = width >= 600 ? 'side' : 'over';
  }

  constructor(private router: Router) {
    this.toolbarDisabled = false;
    this.sidenavMode = 'over'
  }

  ngOnInit(): void {
    this.onWindowResize(null);
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (_.isEqual(event.urlAfterRedirects, '/') || _.isEqual(event.urlAfterRedirects, '/login')) {
            this.toolbarDisabled = true;
            return;
          }
          this.toolbarDisabled = false;
        }
      });
  }

  loadUser(){

  }

  toggle(){
    this.sidenav.toggle(!this.sidenav._isOpened);
  }

}
