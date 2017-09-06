import { IError } from './../models/IError';
import { ILoginUser } from './../models/ILoginUser';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IUser } from './../models/IUser';
import { ICookie } from './../models/ICookie';

const remoteServerHost = 'http://localhost:9090/api/auth';

@Injectable()
export class UsersService {
  constructor(private http: Http, private authenticationService: AuthenticationService) { }

  login(user: ILoginUser): Observable<any> {
    return this.http
      .post(`${remoteServerHost}/login`, user)
      .map(res => {
        const parseResponse = res.json();
        let result;

        if (parseResponse.error) {
          const errorObj = parseResponse.error as IError;
          throw errorObj;
        } else {
          result = parseResponse as ICookie;
          this.authenticationService.setLoginCookie(result);
        }

        return result;
      });
  }

  logout() {
    // TODO: send request to the server to remove session
    this.authenticationService.deleteLoginCookie();
  }

  register(user: IUser): Observable<ICookie> {
    return this.http
      .post(`${remoteServerHost}/register`, user)
      .map(res => {
        const parsedCookie = res.json() as ICookie;
        this.authenticationService.setLoginCookie(parsedCookie);
        return parsedCookie;
      });
  }

}
