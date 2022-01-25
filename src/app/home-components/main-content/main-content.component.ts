import { Component, OnInit } from '@angular/core';
import { mainOptions, collectionOptions, places } from '../../list-interface'
import { AppServiceService } from 'src/app/service/app-service.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {

  mainOptionsList: mainOptions[] = []; 
  collectionOptionList: collectionOptions[] = [];
  placesList: places[] = [];

  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.mainOptionsList = this.appService.getMainOptionList();
    this.collectionOptionList = this.appService.getCollectionOptionList();
    this.placesList = this.appService.getPlaceList();
  }
}
