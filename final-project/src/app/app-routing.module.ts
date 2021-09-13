import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SuccessComponent } from './components/success/success.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component'
import { IntroduceComponent } from './components/introduce/introduce.component';
import { ContactComponent } from './components/contact/contact.component'


import { WestPointComponent } from './components/introduce/west-point/west-point.component';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { QnaComponent } from './components/qna/qna.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'project-description', component: ProjectDescriptionComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'introduce', component: IntroduceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'west-point-introduce', component: WestPointComponent },
  { path: 'qna', component: QnaComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'about', component: AboutUsComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
