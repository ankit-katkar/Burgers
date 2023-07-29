import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { BurgersComponent } from './burgers/burgers.component';
import { PremiumBurgerComponent } from './premium-burger/premium-burger.component';
import { FiresComponent } from './fires/fires.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { BestOfComboComponent } from './best-of-combo/best-of-combo.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { LoginComponent } from './login-page/login/login.component';
import { SignUpComponent } from './login-page/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './login-page/forgot-password/forgot-password.component';
import { FaqPageComponent } from './footer-pages/faq-page/faq-page.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'ourmenu', component: OurMenuComponent},
  {path: 'burgers', component: BurgersComponent},
  {path: 'premiumBurger', component: PremiumBurgerComponent},
  {path: 'fires', component: FiresComponent},
  {path: 'beverages', component: BeveragesComponent},
  {path: 'Bestofcombo', component: BestOfComboComponent},
  {path: 'franchise', component: FranchiseComponent},
  {path: 'login', component: LoginComponent},
  {path: 'singUp', component: SignUpComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'faq', component: FaqPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
