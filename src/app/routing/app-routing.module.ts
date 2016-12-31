import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent, SaleCarComponent, FindCarComponent } from '../components';
import { FirebaseTest } from './../services/firebase-test.component';
//import { AuthGuard } from '../common/guards/';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sale-car', component: SaleCarComponent },
  { path: 'find-car', component: FindCarComponent },
  { path: 'test', component: FirebaseTest },
  { path: '**',     redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }