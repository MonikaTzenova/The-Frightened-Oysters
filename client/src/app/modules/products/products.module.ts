import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsComponent } from '../../components/products/details/details.component';
import { ProductsRouting } from './products.routing';
import { ProductsComponent } from '../../components/products/list/products.component';
import {SearchFilterPipe} from '../../pipes/search-filter.pipe';
import { ProductsService } from '../../services/products.service';


@NgModule({
  imports: [
    CommonModule,
    ProductsRouting
  ],
  declarations: [
    ProductsComponent,
    DetailsComponent,
    SearchFilterPipe
  ],
  // providers: [ProductsService] // comment later
})

export class ProductsModule { }
