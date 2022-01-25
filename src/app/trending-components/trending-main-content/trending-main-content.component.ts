import { Component, OnInit } from '@angular/core';
import { trendingItems } from '../../list-interface';
import { AppServiceService } from 'src/app/service/app-service.service';

@Component({
  selector: 'app-trending-main-content',
  templateUrl: './trending-main-content.component.html',
  styleUrls: ['./trending-main-content.component.scss']
})
export class TrendingMainContentComponent implements OnInit {
  trendingItemsList: trendingItems[] = [];

  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.trendingItemsList = this.appService.getTrendingItemsList();
  }

}
