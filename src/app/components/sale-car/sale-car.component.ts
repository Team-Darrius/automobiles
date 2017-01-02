import { Component, OnInit } from '@angular/core';
import {AF} from "../../../providers/af";
import {FirebaseListObservable} from "angularfire2";
import { CarModel } from './../../models/car';

@Component({
  selector: 'app-sale-car',
  templateUrl: './sale-car.component.html',
  styleUrls: ['./sale-car.component.css']
})

export class SaleCarComponent implements OnInit {

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
    this.afService.af.auth.subscribe(auth => {
          console.log(auth);
          this.userData = auth;
    })
  }

  createCar() {

        this.newCar = { 
          brand: this.brand, 
          model: this.model,
          year: this.year,
          location: this.location,
          transmission: this.transmission,
          color: this.color,
          power: this.power,
          engineType: this.engineType,
          picture: this.picture,
          price: this.price,
        }

        this.afService.sendCarToFB(this.newCar, this.userData);

        // if (this.newCar.brand && this.newCar.model) {
        //     this.newCar.brand = ''
        //     this.newCar.model = ''
        //     this.newCar.year = '1900'
        //     this.newCar.location = ''
        //     this.newCar.transmission = ''
        //     this.newCar.color = ''
        //     this.newCar.power = ''
        //     this.newCar.engineType = ''
        //     this.newCar.picture = ''
        //     this.newCar.price = ''
        // }
  }
}
