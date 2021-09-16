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
import { ContactComponent } from './components/contact/contact.component';
// import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { MaterialModule } from './material/material.module';
import { WestPointComponent } from './components/introduce/west-point/west-point.component';
import { ContactProjectComponent } from './components/common/contact-project/contact-project.component';
import { BackToTopComponent } from './components/common/back-to-top/back-to-top.component';
import { QnaComponent } from './components/qna/qna.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { OceanParkComponent } from './components/introduce/ocean-park/ocean-park.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EventComponent } from './components/event/event.component';
import { EventItemComponent } from './components/event/event-item/event-item.component';
import { NotificationComponent } from './components/common/notification/notification.component';
import { HeaderPageComponent } from './components/common/header-page/header-page.component';
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
    // ProductDetailsComponent,
    ContactComponent,
    WestPointComponent,
    ContactProjectComponent,
    BackToTopComponent,
    QnaComponent,
    PrivacyComponent,
    AboutUsComponent,
    EventComponent,
    EventItemComponent,
    OceanParkComponent,
    NotificationComponent,
    HeaderPageComponent,
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
