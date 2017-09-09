import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ListProductElementComponent } from '../../components/products/list-product-element/list-product-element.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavBarComponent,
    FooterComponent,
    ListProductElementComponent
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    ListProductElementComponent,
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
