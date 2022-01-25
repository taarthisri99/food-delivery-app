import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/service/app-service.service';
import { collectionOptions, diningOutItems } from '../../list-interface'

@Component({
  selector: 'app-dining-out-main-content',
  templateUrl: './dining-out-main-content.component.html',
  styleUrls: ['./dining-out-main-content.component.scss']
})
export class DiningOutMainContentComponent implements OnInit {
  collectionOptionsList: collectionOptions[] = []
  diningOutItemsList: diningOutItems[] = []

  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.collectionOptionsList = this.appService.getCollectionOptionList();
    this.diningOutItemsList = this.appService.getDiningOutItemsList();
  }

}
