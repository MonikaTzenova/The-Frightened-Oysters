import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRouting } from './app.routing';

import { SharedModule } from './modules/shared/shared.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from './../environments/firebase.config';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { HistoryComponent } from './components/history/history.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { CoreModule } from './core-module/core.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DetailsComponent } from './products/details/details.component';
import {SearchFilterPipe} from './pipes/search-filter.pipe';
// import { ProductsModule } from './products/products.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    AppRouting,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CoreModule.forRoot(),
    CarouselModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    // ProductsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ProfileComponent,
    ProductsComponent,
    AddEditProductComponent,
    HistoryComponent,
    CheckOutComponent,
    AboutComponent,
    CartComponent,
    DetailsComponent,
    SearchFilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
