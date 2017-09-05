import { ProductsService } from '../../services/products.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsService } from '../../services/promotions.service';

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
