import { Component, OnInit } from '@angular/core';
import {AF} from "../../../providers/af";
import {FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public cars: FirebaseListObservable<any>;
  constructor(public afService: AF) {
    this.cars = this.afService.af.database.list('cars');
   }

  ngOnInit() {
    console.log(this.cars);
  }

}
