import { NgModule, ModuleWithProviders } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { PromotionsService } from '../../services/promotions.service';
import { UsersService } from './../../services/users.service';
import { CookieService } from 'ng2-cookies';
import { AuthenticationService } from './../../services/authentication.service';

@NgModule({})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        CookieService,
        AuthenticationService,
        PromotionsService,
        ProductsService,
        UsersService
      ],
    };
  }
}
