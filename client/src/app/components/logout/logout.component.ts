import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit() {
    this.userService.logout();
    this.router.navigate(['home'], { queryParams: { 'refresh': 1 } });
  }

}
