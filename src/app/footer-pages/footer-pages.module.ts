import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterPagesRoutingModule } from './footer-pages-routing.module';
import { AboutComponent } from './about/about.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { TermAndConditionsComponent } from './term-and-conditions/term-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AboutComponent,
    FaqPageComponent,
    TermAndConditionsComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    FooterPagesRoutingModule,
    NgbAccordionModule,
    NgbModule
  ]
})
export class FooterPagesModule { }
