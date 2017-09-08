import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { DetailsComponent } from '../../components/products/details/details.component';
import { ProductsRouting } from './products.routing';
import { ProductsComponent } from '../../components/products/list/products.component';
import { ListProductElementComponent } from '../../components/products/list-product-element/list-product-element.component';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';
import { ProductsService } from '../../services/products.service';


@NgModule({
  imports: [
    CommonModule,
    ProductsRouting,
    HttpModule
  ],
  declarations: [
    ProductsComponent,
    ListProductElementComponent,
    DetailsComponent,
    SearchFilterPipe
  ]
})

export class ProductsModule { }
