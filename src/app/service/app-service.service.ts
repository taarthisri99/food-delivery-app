import { Injectable } from '@angular/core';
import { mainOptionsList, collectionOptionList, placesList, diningOutItemsList, trendingItemsList, restaurantList } from '../list';
import { mainOptions, collectionOptions, places, diningOutItems, trendingItems } from '../list-interface';

@Injectable({
  providedIn: 'root'
})

/**  
 * AppServiceService implements methods to receive and send data 
 * @author Aarthi Tamilselvan
 * @version 1.0.0  
 * 
 */
export class AppServiceService {

  constructor() { }

  /**  
   * Gets main option list
   * @return {mainOptions[]} Returns main option list
   **/
  getMainOptionList(): mainOptions[] {
    return mainOptionsList;
  }

  /**  
   * Gets collection option list
   * @return {collectionOptions[]} Returns collection option list
   **/
  getCollectionOptionList(): collectionOptions[] {
    return collectionOptionList;
  }

  /**  
   * Gets places list
   * @return {places[]} Returns places list
   **/
  getPlaceList(): places[] {
    return placesList;
  }

  /**  
   * Gets dining out items list
   * @return {diningOutItems[]} Returns dining out items list
   **/
  getDiningOutItemsList(): diningOutItems[] {
    return diningOutItemsList;
  }

  /**  
   * Gets trending items list
   * @return {trendingItems[]} Return trending items list
   **/
  getTrendingItemsList(): trendingItems[] {
    return trendingItemsList;
  }

  public getRestaurant(title: string): any {
    return diningOutItemsList.find(restaurant => restaurant.title == title);
  }
}
