import { Component, OnInit } from '@angular/core';
import {AF} from "../../../providers/af";
import {FirebaseListObservable} from "angularfire2";
import { Brand, Location, Transmission, EngineType } from './../../models/enums';


let years = ['', 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2020, 2011, 2012, 2013, 2014, 2015, 2016, 2017]

function parseEnum(Enumeration){
  let items = [];
    for (var enumMember in Enumeration) {
      var isValueProperty = parseInt(enumMember, 10) >= 0
      if (isValueProperty) {
          items.push({key: enumMember, value: Enumeration[enumMember]});
      }
    }
    return items;
}

@Component({
  selector: 'app-find-car',
  templateUrl: './find-car.component.html',
  styleUrls: ['./find-car.component.css']
})

export class FindCarComponent implements OnInit {
  brands : any[];
  years : any[];
  locations: any[];
  transmissions : any[];
  engineTypes : any[];
  foundCars : any[]
  filteredCars: any[];
  public brand: string;
  public model: string;
  public year: string;
  public location: string;
  public transmission: string;
  public engineType: string;
  public notFound : string;

  constructor(public afService: AF) { 
      this.brands = [];
      this.years = years;
      this.locations = []
      this.transmissions = [];
      this.engineTypes = [];

  }

  ngOnInit() {
    this.brands = parseEnum(Brand);
    this.locations = parseEnum(Location);
    this.transmissions = parseEnum(Transmission);
    this.engineTypes = parseEnum(EngineType);

    const getCars = this.afService.af.database.list('/cars');
      getCars.subscribe(queriedItems => {
        console.log(queriedItems);
        this.foundCars = queriedItems;
      });
  }

  onChangeBrand(deviceValue) {
    this.brand = this.brands[deviceValue].value;
    console.log(this.brand);
  }
  onChangeModel(deviceValue) {
    this.model = deviceValue;
    console.log(this.model);
  }

  onChangeYear(deviceValue) {
    this.year = deviceValue;
    console.log(this.year);
  }

  onChangeLocation(deviceValue) {
    this.location = this.locations[deviceValue].value;
    console.log(this.location);
  }

  onChangeTransmission(deviceValue) {
    this.transmission = this.transmissions[deviceValue].value;
    console.log(this.transmission);
  }

   onChangeEngineType(deviceValue) {
    this.engineType = this.engineTypes[deviceValue].value;
    console.log(this.engineType);
  }

  findCar(){
    this.notFound = undefined;
    if (this.brand !== undefined && this.brand !== '') {
      debugger;
      this.filteredCars = this.foundCars.filter(car => car.brand === this.brand);
    }
    if (this.model !== undefined && this.model !== '') {
      debugger;
      this.filteredCars = this.foundCars.filter(car => car.model === this.model);
    }
    if (this.year !== undefined && this.year !== '') {
      debugger;
      this.filteredCars = this.foundCars.filter(car => car.year === this.year);
    }
    if (this.location !== undefined && this.location !== '') {
      debugger;
      this.filteredCars = this.foundCars.filter(car => car.location === this.location);
    }
    if (this.transmission !== undefined && this.transmission !== '') {
      debugger;
      this.filteredCars = this.foundCars.filter(car => car.transmission === this.transmission);
    }
    if (this.engineType !== undefined && this.engineType !== '') {
      debugger;
      this.filteredCars = this.foundCars.filter(car => car.engineType === this.engineType);
    }
    if (this.filteredCars.length < 1) {
      this.notFound = 'Тhere are no cars found!'
    }
  }
}
