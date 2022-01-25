import { Injectable } from '@angular/core';
import { mainOptionsList, collectionOptionList, placesList, diningOutItemsList, trendingItemsList } from '../list';
import { mainOptions, collectionOptions, places, diningOutItems, trendingItems } from '../list-interface';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  mainOptionsList: mainOptions[] = mainOptionsList;
  collectionOptionList: collectionOptions[] = collectionOptionList;
  placesList: places[] = placesList;
  diningOutItemsList: diningOutItems[] = diningOutItemsList;
  trendingItemsList: trendingItems[] = trendingItemsList;

  constructor() { }

  getMainOptionList() {
    return this.mainOptionsList = mainOptionsList;
  }

  getCollectionOptionList() {
    return this.collectionOptionList = collectionOptionList;
  }

  getPlaceList() {
    return this.placesList = placesList;
  }

  getDiningOutItemsList() {
    return this.diningOutItemsList = diningOutItemsList;
  }

  getTrendingItemsList() {
    return this.trendingItemsList = trendingItemsList;
  }
}
