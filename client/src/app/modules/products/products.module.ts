import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../../modules/shared/shared.module';

import { DetailsComponent } from '../../components/products/details/details.component';
import { ProductsRouting } from './products.routing';
import { ProductsComponent } from '../../components/products/list/products.component';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';
import { ProductsService } from '../../services/products.service';


@NgModule({
  imports: [
    CommonModule,
    ProductsRouting,
    HttpModule,
    SharedModule
  ],
  declarations: [
    ProductsComponent,
    DetailsComponent,
    SearchFilterPipe
  ]
})

export class ProductsModule { }
