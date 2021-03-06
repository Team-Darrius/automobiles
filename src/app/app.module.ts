import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-bootstrap/modal';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent, PageNotFoundComponent } from './app.component';
import { NotificationComponent } from './components/notifications/notify.component';
import { NotificationService } from './services/index';
import {
    NavbarComponent,
    HomeComponent,
    SaleCarComponent,
    CarsListComponent,
    CarItemComponent,
    FindCarComponent,
    FooterComponent
} from './components';

import { AuthModule } from './auth/auth.module';
import { DashModule } from './dashboard/dashboard.module';
import { AngularFireModule } from 'angularfire2';

import { CarService } from './services/car.service';
import { firebaseConfig } from '../environments/firebase.config';
import { AF, firebaseAuthConfig } from "../providers/af";
import { SortPipe } from './pipes/sort-pipe';
import { AboutComponent } from './components/about/about.component';


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
        SortPipe,
        AboutComponent,
        FooterComponent
    ],

    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
        AuthModule,
        ModalModule.forRoot(),
        DashModule,
        CommonModule
    ],

    providers: [
        AF,
        NotificationService],
    bootstrap: [AppComponent]
})

export class AppModule { }
