import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TermAndConditionsComponent } from './term-and-conditions/term-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'T&C', component:TermAndConditionsComponent},
  {path:'PrivacyPolicy', component:PrivacyPolicyComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterPagesRoutingModule { }
