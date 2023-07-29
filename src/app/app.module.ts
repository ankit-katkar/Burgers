import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { BurgersComponent } from './burgers/burgers.component';
import { PremiumBurgerComponent } from './premium-burger/premium-burger.component';
import { FiresComponent } from './fires/fires.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { BestOfComboComponent } from './best-of-combo/best-of-combo.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { FooterPagesModule } from './footer-pages/footer-pages.module';
import { LoginPageModule } from './login-page/login-page.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OurMenuComponent,
    BurgersComponent,
    PremiumBurgerComponent,
    FiresComponent,
    BeveragesComponent,
    BestOfComboComponent,
    FranchiseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FooterPagesModule,
    LoginPageModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
