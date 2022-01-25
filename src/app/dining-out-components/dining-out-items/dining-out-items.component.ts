import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dining-out-items',
  templateUrl: './dining-out-items.component.html',
  styleUrls: ['./dining-out-items.component.scss']
})
export class DiningOutItemsComponent implements OnInit {
  @Input() image?: string;
  @Input() title?: string;
  @Input() rating?: string;
  @Input() type?: string;
  @Input() cost?: string;
  @Input() place?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
