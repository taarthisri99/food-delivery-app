import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home-components/header/header.component';
import { ItemComponent } from './home-components/item/item.component';
import { CollectionItemComponent } from './home-components/collection-item/collection-item.component';
import { MainContentComponent } from './home-components/main-content/main-content.component';
import { PlaceItemComponent } from './home-components/place-item/place-item.component';
import { FooterComponent } from './home-components/footer/footer.component';
import { TrendingItemComponent } from './trending-components/trending-item/trending-item.component';
import { TrendingMainContentComponent } from './trending-components/trending-main-content/trending-main-content.component';
import { DiningOutHeaderComponent } from './dining-out-components/dining-out-header/dining-out-header.component';
import { DiningOutMainContentComponent } from './dining-out-components/dining-out-main-content/dining-out-main-content.component';
import { DiningOutItemsComponent } from './dining-out-components/dining-out-items/dining-out-items.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [
  {
    outlet: 'primary',
    path: '',
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            outlet: 'HeaderComponent',
            component: HeaderComponent,
          },
          {
            path: '',
            outlet: 'MainContentComponent',
            component: MainContentComponent,
          }
        ]
      },
      {
        path: 'dining',
        children: [
          {
            path: '',
            outlet: 'HeaderComponent',
            component: DiningOutHeaderComponent,
          },
          {
            path: '',
            outlet: 'MainContentComponent',
            component: DiningOutMainContentComponent,
          }
        ]
      },

      {
        path: 'trending',
        children: [
          {
            path: '',
            outlet: 'HeaderComponent',
            component: DiningOutHeaderComponent,
          },
          {
            path: '',
            outlet: 'MainContentComponent',
            component: TrendingMainContentComponent,
          }
        ]
      },

      {
        path: 'restaurant/:userId',
        children: [
          {
            path: '',
            outlet: 'HeaderComponent',
            component: DiningOutHeaderComponent,
          },
          {
            path: '',
            outlet: 'MainContentComponent',
            component: RestaurantComponent,
          }
        ]
      }
    ]
  } 
 ]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    CollectionItemComponent,
    MainContentComponent,
    PlaceItemComponent,
    FooterComponent,
    TrendingItemComponent,
    TrendingMainContentComponent,
    DiningOutItemsComponent,
    DiningOutHeaderComponent,
    DiningOutMainContentComponent,
    RestaurantComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot(routes,  {
      scrollPositionRestoration: 'enabled'})
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
