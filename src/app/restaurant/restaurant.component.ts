import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../service/app-service.service';
import { Subscription } from 'rxjs';
import { diningOutItems } from '../list-interface';
import { restaurantInfo } from '../list';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  sub: Subscription = new Subscription;
  userId: any;
  restaurantInfoList:string[] = restaurantInfo;

  restaurant: diningOutItems = {
    image: '',
    title: '',
    rating: 0,
    type: '',
    cost: '',
    place: ''
  }
  
  constructor(private AppServiceService: AppServiceService, private Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub=this.Activatedroute.paramMap.subscribe(params => {
      this.userId = params.get('userId');
      this.restaurant = this.AppServiceService.getRestaurant(this.userId);
   });
  }

}
