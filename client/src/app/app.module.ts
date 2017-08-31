import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppRouting } from './app.routing';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from './../environments/firebase.config';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { HistoryComponent } from './history/history.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ProfileComponent,
    ProductsComponent,
    AddEditProductComponent,
    HistoryComponent,
    CheckOutComponent,
    AboutComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRouting,
    HttpModule,
	  AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }