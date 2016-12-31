import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseApp } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent{
  public userData: any;
  constructor(private af: AngularFire, private router: Router){ }

  ngOnInit() {
        this.af.auth.subscribe(auth => {
          console.log(auth);
          this.userData = auth;
        });
    }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['/'])
  }
}
