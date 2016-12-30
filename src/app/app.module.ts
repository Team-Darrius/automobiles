import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsListComponent } from './car/cars-list/cars-list/cars-list.component';

import { CarService } from './services/car.service';
import { CarItemComponent } from './car/car-item/car-item/car-item.component';

import {firebaseConfig} from '../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';


@NgModule({
  declarations: [
      AppComponent,
      NavbarComponent,
      CarsListComponent,
      CarItemComponent 
      ],

  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AngularFireModule.initializeApp(firebaseConfig)
      ],

  providers: [CarService],
  bootstrap: [AppComponent]
})

export class AppModule { }
