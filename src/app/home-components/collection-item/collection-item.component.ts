import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent implements OnInit {
  @Input() content?: string;
  @Input() img?: string;
  @Input() visits?: string;
  @Input() url?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
