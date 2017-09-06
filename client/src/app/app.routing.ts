import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Modules
import { AuthenticationModule } from './modules/authentication/authentication.module';

// Components
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/list/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { HistoryComponent } from './components/history/history.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full', },

    // Authentication
    { path: 'auth', loadChildren: './modules/authentication/authentication.module#AuthenticationModule' },

    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    // { path: 'products', loadChildren: './products/products.module#ProductsModule' },
    { path: 'add-edit-product', component: AddEditProductComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'check-out', component: CheckOutComponent },
    { path: 'about', component: AboutComponent },
    { path: 'cart', component: CartComponent },

    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRouting { }
