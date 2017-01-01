import { Component, OnInit } from '@angular/core';
import { AF } from '../../../providers/af';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent{
  public userData: any;
  constructor(public afService: AF, private router: Router){ }

  ngOnInit() {
        this.afService.af.auth.subscribe(auth => {
          console.log(auth);
          this.userData = auth;
        });
    }

  logout() {
    this.afService.logout();
    this.router.navigate(['/'])
  }
}
