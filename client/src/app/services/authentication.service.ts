import { ICookie } from './../models/ICookie';
import { Injectable } from '@angular/core';
import { CookieService } from 'ng2-cookies';
import { Headers } from '@angular/http';

const authCookieKey = 'x-cookie';
const authCookiePath = '/';

@Injectable()
export class AuthenticationService {

  constructor(private cookieService: CookieService) { }

  public isUserLogged(): boolean {
    const authCookie = this.cookieService.get(authCookieKey);
    console.log(this.cookieService.getAll());
    return !!authCookie;
  }

  public getAuthHeader(): Headers {
    const cookie = this.getAuthCookie();
    const headers = new Headers();
    headers.append(authCookieKey, cookie);
    return headers;
  }

  private getAuthCookie(): string {
    const authCookie = this.cookieService.get(authCookieKey);
    return authCookie;
  }

  public setLoginCookie(cookie: ICookie) {
    const expireDate = new Date(cookie.cookieExpirationTime);
    this.cookieService.set(authCookieKey, cookie.cookie, expireDate, authCookiePath);
  }

  public deleteLoginCookie() {
    this.cookieService.delete(authCookieKey, authCookiePath);
  }

}
