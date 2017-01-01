import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent, PageNotFoundComponent } from './app.component';

import { NavbarComponent, HomeComponent, SaleCarComponent, CarsListComponent, CarItemComponent, FindCarComponent } from './components';

import { AuthModule } from './auth/auth.module';
import { DashModule } from './dashboard/dashboard.module';
import { AngularFireModule } from 'angularfire2';

import { CarService } from './services/car.service';
import { firebaseConfig } from '../environments/firebase.config';
import { AF, firebaseAuthConfig } from "../providers/af";

@NgModule({
  declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      SaleCarComponent,
      CarsListComponent,
      CarItemComponent,
      SaleCarComponent,
      FindCarComponent,
      PageNotFoundComponent
      ],

  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
      AuthModule,
      DashModule,
      CommonModule
  ],

  providers: [CarService, AF],
  bootstrap: [AppComponent]
})

export class AppModule { }
