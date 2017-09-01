import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { HistoryComponent } from './history/history.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full', },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'add-edit-product', component: AddEditProductComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'check-out', component: CheckOutComponent },
    { path: 'about', component: AboutComponent },
    { path: 'cart', component: CartComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRouting { }
