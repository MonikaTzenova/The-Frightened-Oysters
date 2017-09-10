import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private isUserLogged = false;

  constructor(private authenticationService: AuthenticationService) {
    authenticationService.userLoggedEvent.subscribe(userLogged => {
      this.checkUserAuthentication();
    });
  }

  ngOnInit() {
    this.checkUserAuthentication();
  }

  checkUserAuthentication() {
    this.isUserLogged = this.authenticationService.isUserLogged();
  }

}
