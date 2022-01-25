import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.scss']
})
export class PlaceItemComponent implements OnInit {

  @Input() place?: string;
  @Input() count?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
