import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent, PageNotFoundComponent } from './app.component';
import { NotificationComponent } from './components/notifications/notify.component';
import { NotificationService } from './services/index';
import { NavbarComponent, HomeComponent, SaleCarComponent, CarsListComponent, CarItemComponent, FindCarComponent } from './components';

import { AuthModule } from './auth/auth.module';
import { DashModule } from './dashboard/dashboard.module';
import { AngularFireModule } from 'angularfire2';

import { CarService } from './services/car.service';
import { firebaseConfig } from '../environments/firebase.config';
import { AF, firebaseAuthConfig } from "../providers/af";
import { SortPipe } from './pipes/sort-pipe';


@NgModule({
  declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      SaleCarComponent,
      CarsListComponent,
      CarItemComponent,
      SaleCarComponent,
      NotificationComponent,
      FindCarComponent,
      PageNotFoundComponent,
      SortPipe
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

  providers: [CarService,
              AF,
              NotificationService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
