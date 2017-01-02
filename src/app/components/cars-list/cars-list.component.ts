import { Component, OnInit } from '@angular/core';
import {AF} from "../../../providers/af";
import {FirebaseListObservable} from "angularfire2";
import { CarService } from '../../services/car.service';

import { CarModel } from '../../models/car';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  title: string;
   public userData: any;
  public newCar: CarModel;
  public brand: string;
  public model: string;
  public year: string;
  public location: string;
  public transmission: string;
  public color: string;
  public power: string;
  public engineType: string;
  public picture: string;
  public price: string;
  public cars: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;

  constructor(public afService: AF) {
    this.cars = this.afService.cars;
    this.users = this.afService.users;
   }

  ngOnInit() {
    this.title = 'Last offers!';
  }
}
