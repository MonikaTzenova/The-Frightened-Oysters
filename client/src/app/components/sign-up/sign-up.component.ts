import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from './../../services/users.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

import { ICookie } from './../../models/ICookie';
import { IUser } from './../../models/IUser';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  private username: FormControl;
  private password: FormControl;
  private company: FormControl;
  private phone: FormControl;
  private address: FormControl;
  private email: FormControl;
  private avatarUrl: FormControl;

  private registerForm: FormGroup;

  constructor(private router: Router, private userService: UsersService, private vcRef: ViewContainerRef, public toastr: ToastsManager) { 
    this.toastr.setRootViewContainerRef(vcRef); 
   }

  ngOnInit() {
    this.buildRegisterFormsData();
  }

  buildRegisterFormsData() {
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100)
    ]);

    this.password  = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100)
    ]);

    this.company  = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100)
    ]);

    this.phone  = new FormControl('', [
      Validators.required
    ]);

    this.address  = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(150)
    ]);

    this.email  = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    this.avatarUrl  = new FormControl('', [
      Validators.required,
      Validators.pattern('https?://.+')
    ]);

    this.registerForm = new FormGroup({
      username: this.username,
      password: this.password,
      company: this.company,
      phone: this.phone,
      address: this.address,
      email: this.email,
      avatarUrl: this.avatarUrl
    });
  }

  register(userData: IUser) {
    const handleSuccessResponse = (cookie: ICookie) => {
      this.router.navigate(['profile'], { queryParams: { 'refresh': 1 } });
      this.toastr.success('Registration successfull');
    };

    this.userService.register(userData)
      .subscribe(handleSuccessResponse);
  }

}
