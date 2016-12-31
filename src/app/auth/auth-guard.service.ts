import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthGuard implements CanActivate{
  public allowed: boolean;

  constructor(private af: AngularFire, private router: Router) { 
    this.af.auth.subscribe((auth) => console.log(auth));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.af.auth.subscribe((auth) =>  {
      if(auth == null) {
        this.router.navigate(['/login']);
        this.allowed = false;
      } else {
        this.allowed = true;
      }
    })
    return this.allowed;
  }
}