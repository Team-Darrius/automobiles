import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AF } from '../../providers/af';

@Injectable()
export class AuthGuard implements CanActivate{
  public isLoggedIn: boolean;

  constructor(private afService: AF, private router: Router) { 
    this.afService.af.auth.subscribe((auth) => console.log(auth));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.afService.af.auth.subscribe((auth) =>  {
      if(auth == null) {
        this.router.navigate(['/login']);
        this.isLoggedIn = false;
      } else {
        // Set the Display Name and Email so we can attribute messages to them
        this.afService.displayName = auth.auth.displayName;
        this.afService.email = auth.auth.email;
        this.isLoggedIn = true;
      }
    })
    return this.isLoggedIn;
  }
}