import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';

import { firebaseConfig } from './../environments/firebase.config';

// External Modules
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Internal Modules
import { SharedModule } from './modules/shared/shared.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { ModalModule } from 'ngx-bootstrap';
// import { ProductsModule } from './products/products.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsComponent } from './components/products/list/products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { HistoryComponent } from './components/history/history.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { CoreModule } from './modules/core-module/core.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DetailsComponent } from './components/products/details/details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsModule } from './modules/products/products.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRouting,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CarouselModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,

    SharedModule,
    CoreModule.forRoot(),
    ModalModule.forRoot(),

    AuthenticationModule
    // ProductsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    // ProductsComponent,
    AddEditProductComponent,
    HistoryComponent,
    CheckOutComponent,
    AboutComponent,
    CartComponent,
    // DetailsComponent,
    NotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
