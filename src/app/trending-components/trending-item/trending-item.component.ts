import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trending-item',
  templateUrl: './trending-item.component.html',
  styleUrls: ['./trending-item.component.scss']
})
export class TrendingItemComponent implements OnInit {
  @Input() image?: string;
  @Input() title?: string;
  @Input() diningRating?: string;
  @Input() deliveryRating?: string;
  @Input() type?: string;
  @Input() place?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
