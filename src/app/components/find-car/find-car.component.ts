import { Component, OnInit } from '@angular/core';
import { Brand, Location, Transmission, EngineType } from './../../models/enums';

let years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2020, 2011, 2012, 2013, 2014, 2015, 2016, 2017]

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

  constructor() { 
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
  }
}
