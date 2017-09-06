import { ICookie } from './../models/ICookie';
import { Injectable } from '@angular/core';
import { CookieService } from 'ng2-cookies';

const authCookieKey = 'x-cookie';
const authCookiePath = '/';

@Injectable()
export class AuthenticationService {

  constructor(private cookieService: CookieService) { }

  isUserLogged(): boolean {
    const authCookie = this.cookieService.get(authCookieKey);
    console.log(this.cookieService.getAll());
    return !!authCookie;
  }

  getAuthCookie(): string {
    const authCookie = this.cookieService.get(authCookieKey);
    return authCookie;
  }

  setLoginCookie(cookie: ICookie) {
    const expireDate = new Date(cookie.cookieExpirationTime);
    this.cookieService.set(authCookieKey, cookie.cookie, expireDate, authCookiePath);
  }

  deleteLoginCookie() {
    this.cookieService.delete(authCookieKey, authCookiePath);
  }

}
