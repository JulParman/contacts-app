import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  static user: string;
  userName: string;
  password: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  login(userName:string) {
    LoginComponent.user = userName;
    this.router.navigate(['/contacts']);
  }

}
