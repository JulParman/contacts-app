import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ConnectionBackend, HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item/contact-list-item.component';
import {ContactDialogComponent} from './contact/contact-dialog/contact-dialog.component';
import {ContactService} from "./contact/services/contact.service";
import {DialogService} from "./contact/services/dialog.service";
import {ContactApiService} from "./contact/services/contact-api.service";
import {LocalStorageService} from "./contact/services/local-storage.service";
import {MapDialogComponent} from './contact/map-dialog/map-dialog.component';
import {ContactAddressPipe} from './contact/pipes/contact-address.pipe';
import {LoginComponent} from './contact/user/login/login.component';
import {RouterModule} from "@angular/router";
import {ContactsComponent} from "./contact/contacts.component";
import {VibrateDirective} from './contact/vibrate.directive';
import {HttpService} from "./contact/services/http.service";
import {UserService} from "./contact/services/user.service";
import {UserApiService} from "./contact/services/user-api.service";
import {AuthenticationService} from "./contact/services/authentication.service";

const routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  }
];

export function getHttp(backend: ConnectionBackend, options: RequestOptions) {
  return new HttpService(backend, options);
}

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    MapDialogComponent,
    ContactAddressPipe,
    LoginComponent,
    ContactsComponent,
    VibrateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HttpService,
      useFactory: getHttp,
      deps: [XHRBackend, RequestOptions]
    },
    ContactService,
    DialogService,
    LocalStorageService,
    ContactApiService,
    UserService,
    UserApiService,
    AuthenticationService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ContactDialogComponent, MapDialogComponent]
})
export class AppModule {
}
