import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, SignupComponent } from '../auth/auth.component';
// import { LoginComponent } from '../login/login.component';
// import { RegisterComponent } from '../register/register.component';

import { AuthGuard } from '../auth/auth-guard.service';

import { HomeComponent, SaleCarComponent, FindCarComponent } from '../components';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { PageNotFoundComponent } from '../app.component';

//import { FirebaseTest } from './../services/firebase-test.component';
//import { AuthGuard } from '../common/guards/';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent},
  { path: 'sale-car', component: SaleCarComponent },
  { path: '**', component: PageNotFoundComponent }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
//   providers: []
// })

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);