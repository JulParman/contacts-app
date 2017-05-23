import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../user";
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  static logedUser : string;

  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit() {
    this.user = new User();
  }

  login(userName:string) {
    this.userService.login(this.user.username, this.user.password).subscribe(() => {
      LoginComponent.logedUser = userName;
      this.router.navigate(['/contacts']);
    });
  }

}
