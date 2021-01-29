import { NgModule, Component } from '@angular/core';

import {Routes, RouterModule} from '@angular/router'

import { AboutComponent } from './components/about/about.component';
import { CryptoportfolioComponent } from './components/cryptoportfolio/cryptoportfolio.component';
import { TransportconsolidatedComponent } from './components/transportconsolidated/transportconsolidated.component';
import { BusinesswebsiteComponent } from './components/businesswebsite/businesswebsite.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'crypto-portfolio', component: CryptoportfolioComponent },
  { path: 'transport-consolidated', component: TransportconsolidatedComponent },
  { path: 'business-website', component: BusinesswebsiteComponent},
  { path: 'contact', component: ContactComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent,CryptoportfolioComponent,TransportconsolidatedComponent,BusinesswebsiteComponent,ContactComponent]
