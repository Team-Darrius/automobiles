import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent{

  constructor(private af: AngularFire, private router: Router){}

  logout() {
    this.af.auth.logout();
    this.router.navigate(['/'])
  }

}
