import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from '../../components/products/list/products.component';
import { DetailsComponent } from '../../components/products/details/details.component';
import {ProductsService} from "../../services/products.service";

const appRoutes: Routes = [
    { path: '', component: ProductsComponent },
    { path: ':id', component: DetailsComponent},

// // otherwise redirect to home
    // { path: '**', redirectTo: 'products' }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class ProductsRouting { }
