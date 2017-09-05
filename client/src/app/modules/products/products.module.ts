import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsComponent } from '../../components/products/details/details.component';
import { ProductsRouting } from './products.routing';
import { ProductsComponent } from '../../components/products/list/products.component';
import { ProductsService } from '../../services/products.service';


@NgModule({
  imports: [
    CommonModule,
    ProductsRouting
  ],
  declarations: [
    ProductsComponent,
    DetailsComponent
  ],
  // providers: [ProductsService] // comment later
})

export class ProductsModule { }
