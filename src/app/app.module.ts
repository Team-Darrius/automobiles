
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './routing/app-routing.module'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent, HomeComponent, SaleCarComponent, CarsListComponent, CarItemComponent } from './components';


import { CarService } from './services/car.service';
import { FirebaseTest } from './services/firebase-test.component';

import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';


@NgModule({
  declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      SaleCarComponent,
      LoginComponent,
      RegisterComponent, 
      CarsListComponent,
      CarItemComponent,
      FirebaseTest,
      SaleCarComponent
      ],

  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(firebaseConfig)
  ],

  providers: [CarService],
  bootstrap: [AppComponent]
})

export class AppModule { }
