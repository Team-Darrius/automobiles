import { Component, OnInit } from '@angular/core';

import { CarService } from '../../../services/car.service';

import { CarModel } from '../../car';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  title: string;
  cars: CarModel[];

  constructor(private _carService: CarService) { }

  ngOnInit() {
    this.title = 'Last offers!';
    this._carService
      .getCars()
      .subscribe(response => this.cars = response);
  }

}
