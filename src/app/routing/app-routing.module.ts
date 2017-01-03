import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, SignupComponent } from '../auth/auth.component';

import { AuthGuard } from '../auth/auth-guard.service';

import { HomeComponent, SaleCarComponent, FindCarComponent, CarsListComponent, AboutComponent } from '../components';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { PageNotFoundComponent } from '../app.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'allcars', component: CarsListComponent},
  { path: 'sale-car', component: SaleCarComponent },
  { path: 'find-car', component: FindCarComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
//   providers: []
// })

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);