import { Component, OnInit } from '@angular/core';
import {cuisineList, restaurantList, restaurantChainList, citiesList } from '../../list'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  cuisineList = cuisineList
  restaurantList = restaurantList
  restaurantChainList = restaurantChainList
  citiesList = citiesList
  constructor() { }

  ngOnInit(): void {
  }

}
