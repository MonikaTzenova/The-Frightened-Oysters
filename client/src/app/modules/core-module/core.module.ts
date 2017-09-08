import { PublicGuardService } from './../../services/guards/public-guard.service';
import { LoggedGuardService } from './../../services/guards/logged-guard.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { PromotionsService } from '../../services/promotions.service';
import { UsersService } from './../../services/users.service';
import { CookieService } from 'ng2-cookies';
import { AuthenticationService } from './../../services/authentication.service';
import { ProfileResolverService } from './../../services/profile-resolver.service';
import { ProductsResolverService } from './../../services/products-resolver.service';
import { CartService } from '../../services/cart.service';

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
        UsersService,
        ProfileResolverService,
        ProductsResolverService,
        LoggedGuardService,
        PublicGuardService,
        CartService
      ],
    };
  }
}
