
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent, PageNotFoundComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
import { NavbarComponent, HomeComponent, SaleCarComponent, CarsListComponent, CarItemComponent, FindCarComponent } from './components';


import { AuthModule } from './auth/auth.module';
import { DashModule } from './dashboard/dashboard.module';

import { CarService } from './services/car.service';
import { FirebaseTest } from './services/firebase-test.component';

import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireModule, FIREBASE_PROVIDERS, AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

@NgModule({
  declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      SaleCarComponent,
      // LoginComponent,
      // RegisterComponent, 
      CarsListComponent,
      CarItemComponent,
      FirebaseTest,
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

  providers: [CarService],
  bootstrap: [AppComponent]
})

export class AppModule { }
