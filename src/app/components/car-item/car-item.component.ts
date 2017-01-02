import { Component, OnInit, Input } from '@angular/core';
import { AF } from '../../../providers/af';
import { CarModel } from '../../models/car';

@Component({
  selector: '[app-car-item]',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})

export class CarItemComponent implements OnInit {
  brand: string;
  model: string;
  year: string;
  location: string;
  transmission: string;
  color: string;
  power: string;
  engineType: string;
  picture: string;
  price: string;

  constructor(public afService: AF) { }

  ngOnInit() {
    this.afService.af.auth.subscribe(auth => {
      console.log(auth);
    });
  }

  @Input('car') set car(car: CarModel) {
    this.brand = car.brand;
    this.model = car.model;
    this.year = car.year;
    this.location = car.location;
    this.transmission = car.transmission;
    this.color = car.color;
    this.power = car.power;
    this.engineType = car.engineType;
    this.picture = car.picture;
    this.price = car.price;
  }
}
