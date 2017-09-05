import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from '../../components/products/list/products.component';
import { DetailsComponent } from '../../components/products/details/details.component';

const appRoutes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'a', component: DetailsComponent },

    // // otherwise redirect to home
    // { path: '**', redirectTo: 'products' }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class ProductsRouting { }
