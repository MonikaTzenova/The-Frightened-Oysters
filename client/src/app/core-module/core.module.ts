import { ProductsService } from './products.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsService } from './promotions.service';

@NgModule({})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        PromotionsService,
        ProductsService,
      ],
    };
  }
}
