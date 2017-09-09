import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IProduct } from './../models/IProduct';
import { IError } from './../models/IError';

const remoteServerHost = 'http://localhost:9090/api';

@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  getAll(): Observable<any> { 
    return this.http
      .get(`${remoteServerHost}/products`)
      .map(res => {
        const parsedResponse = res.json();

        if (parsedResponse.error) {
          const errorObj = parsedResponse.error as IError;
          throw errorObj;
        } else {
          return parsedResponse as IProduct[];
        }
      });
  }

  getById(id) {
    // return this.items.find(x => x.id === id);

  }
  add(product: any) {
    // const last = this.items[this.items.length - 1];
    // product.id = last.id + 1;
    // this.items.push(product);
  }
}
