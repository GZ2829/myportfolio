import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppRoutingModule, routingComponents } from './app-routing.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HttpModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
