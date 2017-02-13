import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material'

import { routing } from './app.routing'
import { AppComponent } from './app.component';


import { CarteComponent } from './carte/carte.component'

import { PaquetModule } from './paquet/paquet.module';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component'



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    routing,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    PaquetModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
