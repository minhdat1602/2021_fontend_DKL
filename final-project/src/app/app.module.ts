import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Carousel animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

// Services
import { AuthService } from './auth/auth.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SuccessComponent } from './components/success/success.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductSlideItemComponent } from './components/home/items/product-slide-item/product-slide-item.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterModule } from '@angular/router';


import { ProductDetailsComponent } from './products/product-details/product-details.component';

import { IntroduceComponent } from './components/introduce/introduce.component';
import { MaterialModule } from './material/material.module';

import { WestPointComponent } from './components/introduce/west-point/west-point.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    PagenotfoundComponent,
    SuccessComponent,
    ProductSlideItemComponent,
    ProductDetailsComponent,
    IntroduceComponent,
    WestPointComponent
  ],
  imports: [
    MaterialModule,
    AngularSvgIconModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule, // carousel required???
    CarouselModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    FontAwesomeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
