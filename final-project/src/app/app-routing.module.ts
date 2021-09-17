import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SuccessComponent } from './components/success/success.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
// import { ProductDetailsComponent } from './components/products/product-details/product-details.component'
import { ContactComponent } from './components/contact/contact.component'


import { WestPointComponent } from './components/introduce/west-point/west-point.component';
import { QnaComponent } from './components/qna/qna.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { EventComponent } from './components/event/event.component';
import { OceanParkComponent } from './components/introduce/ocean-park/ocean-park.component';

import { NotificationComponent } from './components/common/notification/notification.component'
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'ocean-park-introduce', component: OceanParkComponent },
  { path: 'contact', component: ContactComponent },
  // { path: "products", component: EventDetailComponent },
  { path: 'products', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) },
  // { path: 'product-details', component: ProductDetailsComponent },
  { path: 'west-point-introduce', component: WestPointComponent },
  { path: 'qna', component: QnaComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: "events", component: EventComponent },
  { path: "events/:id", component: EventDetailComponent },
  { path: 'n', component: NotificationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
