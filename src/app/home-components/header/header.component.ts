import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardToAddPost: boolean=false;
  hideButton: boolean = false;
  myClass: boolean = false;
  showCard(){
      this.cardToAddPost=true;
      this.hideButton = true;
      this.myClass= true;
    }
    hide(){
      this.cardToAddPost=false;
      this.hideButton = false;
      this.myClass = false;
    }

}
